"use client";
import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

interface AuroraProps {
    colorStops?: string[];
    blend?: number;
    amplitude?: number;
    speed?: number;
}

export default function Aurora({
    colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
    blend = 0.5,
    amplitude = 1.0,
    speed = 0.5,
}: AuroraProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Create Renderer
        const renderer = new Renderer({ alpha: true });
        const gl = renderer.gl;
        // Clear color (transparent)
        gl.clearColor(0, 0, 0, 0);

        // Append canvas to container
        container.appendChild(gl.canvas);

        // Uniforms
        const uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new Color(0, 0, 0) }, // Use Color for vec3/vec2 if convenient, or just array
            uColorStops: { value: colorStops.map((hex) => new Color(hex)) }, // Array of Colors
            uBlend: { value: blend },
            uAmplitude: { value: amplitude },
        };

        // Shaders
        const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `;

        const fragment = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uColorStops[3];
      uniform float uBlend;
      uniform float uAmplitude;
      varying vec2 vUv;

      // Simplex 2D noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        
        // Adjust coordinate system
        vec2 pos = st * vec2(1.0, uResolution.y / uResolution.x);
        
        // Time variable
        float t = uTime * 0.5;

        // Noise field for the aurora structure
        float n = snoise(pos * 3.0 + vec2(0, t * 0.2));
        
        // Aurora layers
        float aurora = 0.0;
        
        for (float i = 0.0; i < 3.0; i++) {
            // Distort the position for each layer
            float z = i * 0.1;
            float noiseT = snoise(vec2(pos.x * 2.0 + t * 0.1 + i, pos.y * 3.0 - t * 0.2));
            
            // Core shape function
            float shape = sin(pos.y * 5.0 + noiseT * 5.0 * uAmplitude + t);
            shape += sin(pos.x * 3.0 + t * 0.5);
            
            // Smooth band
            float band = smoothstep(0.0, 0.5, shape) * smoothstep(1.0, 0.5, shape);
            
            // Accumulate
            aurora += band * 0.5;
        }
        
        // Mixing colors
        vec3 color = mix(uColorStops[0], uColorStops[1], st.y + n * 0.2);
        color = mix(color, uColorStops[2], st.x + n * 0.2);
        
        // Apply blend (opacity/mix with background assumption)
        // Here we just output the color with alpha
        
        // Vignette / fade to transparent at edges?
        // Let's just output the gorgeous colors
        
        // Final color adjustment
        vec3 finalColor = color + aurora * 0.3;
        
        // Adjust alpha based on intensity or blend
        float alpha = uBlend + aurora * 0.5;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

        const geometry = new Triangle(gl);

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms,
            transparent: true,
        });

        const mesh = new Mesh(gl, { geometry, program });

        let animationId: number;

        const resize = () => {
            renderer.setSize(container.clientWidth, container.clientHeight);

            // Update resolution uniform
            // For OGL we might need to update the value property directly?
            // Or create a new Color/Vec3. OGL handles arrays/objects.
            // Let's assume we pass [width, height, pixelRatio] or similar
            if (program.uniforms.uResolution) {
                program.uniforms.uResolution.value = new Color(
                    gl.canvas.width,
                    gl.canvas.height,
                    gl.renderer.dpr
                );
            }
        };

        window.addEventListener("resize", resize);
        resize();

        let time = 0;
        const update = () => {
            animationId = requestAnimationFrame(update);
            time += 0.01 * speed;
            program.uniforms.uTime.value = time;
            renderer.render({ scene: mesh });
        };

        // Need to update uniforms when props change? 
        // Usually yes, but OGL is imperative.
        // For simplicity, we just run the loop. 
        // Ideally we'd optimize.

        animationId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
            if (container.contains(gl.canvas)) {
                container.removeChild(gl.canvas);
            }
            // Clean up WebGL resources
            // gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, [JSON.stringify(colorStops), blend, amplitude, speed]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ overflow: 'hidden' }}
        />
    );
}

'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Wave Component for the sophisticated animated lines
const WaveLine = ({
  delay,
  duration,
  yOffset,
  opacity,
  color = "#E0C3FC"
}: {
  delay: number;
  duration: number;
  yOffset: number;
  opacity: number;
  color?: string;
}) => {
  return (
    <motion.div
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: 1,
        opacity: opacity
      }}
      transition={{
        duration: 2,
        delay: delay,
        ease: "easeInOut"
      }}
      className="absolute w-full"
      style={{ top: `${yOffset}%` }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto rotate-0"
        style={{ minWidth: '800px' }}
      >
        <motion.path
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          d="M0,160 C320,300, 420,0, 740,160 C1060,320, 1120,40, 1440,160"
          animate={{
            d: [
              "M0,160 C320,300, 420,0, 740,160 C1060,320, 1120,40, 1440,160",
              "M0,160 C320,0, 420,300, 740,160 C1060,0, 1120,320, 1440,160",
              "M0,160 C320,300, 420,0, 740,160 C1060,320, 1120,40, 1440,160"
            ]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
      </svg>
    </motion.div>
  );
};

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#FFFFFF] overflow-hidden flex items-center">

      {/* Dynamic Background Pattern - Sophisticated Waves */}
      <div className="absolute top-0 right-0 w-[60%] h-full opacity-60 pointer-events-none translate-x-1/4">
        {/* Layered waves creating the 'net' effect */}
        {[...Array(10)].map((_, i) => (
          <WaveLine
            key={i}
            delay={i * 0.2}
            duration={15 + i}
            yOffset={10 + (i * 5)}
            opacity={0.3 - (i * 0.02)}
            color={i % 2 === 0 ? "#E0C3FC" : "#8EC5FC"}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <WaveLine
            key={`b-${i}`}
            delay={i * 0.3}
            duration={20 + i}
            yOffset={30 + (i * 6)}
            opacity={0.2}
            color="#A0A0A0"
          />
        ))}
      </div>

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm rounded-full px-8 py-4 flex items-center justify-between"
        >
          <div className="flex gap-8 items-center mx-auto">
            <a href="#work" className="text-gray-600 hover:text-black transition-colors text-sm font-medium tracking-wide">
              WORK
            </a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm font-medium tracking-wide">
              ABOUT
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm font-medium tracking-wide">
              CONTACT
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">

        {/* Left Side - Typography */}
        <div className="space-y-10 relative">

          {/* Subtle decoration line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] origin-left"
          />

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm font-semibold tracking-[0.4em] uppercase"
            >
              Software Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#1a1a1a]"
            >
              DARIEN
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] relative">
                PEREZ
                {/* Decorative subtle blur behind text */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] blur-2xl opacity-30 -z-10" />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed font-light"
          >
            Crafting elegant solutions through code. <br />
            Transforming complex problems into seamless digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <a
              href="#work"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#1a1a1a] text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#8EC5FC]/30"
            >
              <span className="relative z-10 font-medium tracking-wide group-hover:px-2 transition-all duration-300">
                VIEW MY WORK
              </span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                className="relative z-10"
              >
                →
              </motion.span>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Side - Interactive Interactive/Visual Area */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
          {/* This area is structurally empty to allow the background waves to shine through, 
                 but we can add a subtle interactive parralax element here if needed. 
                 For now, the waves take the stage. */}

          <motion.div
            animate={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 20
            }}
            className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none"
          >
            {/* Optional: Add a very subtle geometric form floating amidst the waves if 'too empty' */}
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 text-sm tracking-widest uppercase"
      >
        Scroll
      </motion.div>

    </section>
  );
}

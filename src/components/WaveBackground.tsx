'use client';

import { motion } from 'framer-motion';

// Wave Line Component
const WaveLine = ({
    delay,
    duration,
    yOffset,
    opacity,
    color,
    width = "100%"
}: {
    delay: number;
    duration: number;
    yOffset: number;
    opacity: number;
    color: string;
    width?: string;
}) => {
    return (
        <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{
                pathLength: 1,
                opacity: opacity
            }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
                delay: delay,
                ease: "easeInOut"
            }}
            className="absolute w-full pointer-events-none"
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
                    strokeWidth="2" // Increased from 1.5
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

export default function WaveBackground({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
    // Colors updated for better visibility
    const primaryColor = theme === 'light' ? "#C77DFF" : "#E0C3FC"; // Slightly darker purple for light mode
    const secondaryColor = theme === 'light' ? "#3A86FF" : "#8EC5FC"; // Slightly darker blue for light mode
    const tertiaryColor = theme === 'light' ? "#A0A0A0" : "#4A4A4A";

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-[80%] h-full opacity-100 translate-x-1/4">
                {/* Layered waves */}
                {[...Array(8)].map((_, i) => (
                    <WaveLine
                        key={i}
                        delay={i * 0.2}
                        duration={12 + i}
                        yOffset={5 + (i * 8)}
                        opacity={theme === 'light' ? 0.4 - (i * 0.03) : 0.2} // Increased opacity
                        color={i % 2 === 0 ? primaryColor : secondaryColor}
                    />
                ))}
                {[...Array(6)].map((_, i) => (
                    <WaveLine
                        key={`b-${i}`}
                        delay={i * 0.3}
                        duration={18 + i}
                        yOffset={20 + (i * 10)}
                        opacity={0.15}
                        color={tertiaryColor}
                    />
                ))}
            </div>
        </div>
    );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="relative bg-[#111111] py-32 overflow-hidden">
            {/* Background Gradient - Subtle ambient glow to match the premium dark feeling */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#2a2a2a] to-transparent opacity-30 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-30 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Image */}
                            <Image
                                src="/yo.jpeg"
                                alt="Darien Perez"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Decorative border/glow behind */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[2rem] -z-10" />
                        <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-[2rem] -z-20 opacity-50" />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
                            About Me
                        </h2>

                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I'm  Software Engineer passionate about building digital products that make a difference.
                                With a background in both Frontend and Backend development, I enjoy bridging the gap between engineering and design.
                            </p>

                            <p>
                                My journey started with a curiosity for how things work, which naturally evolved into a love for programming.
                                I specialize in building scalable and newbrand solutions using modern technologies like React, Next.js, and Node.js.
                            </p>

                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open source, or looking for the next problem to solve.
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="pt-8 border-t border-white/10 mt-12">
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                                Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    {
                                        name: "React",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M12 21.68c-.68 0-1.38-.1-2.07-.33-4.04-1.32-4.04-5.35-4.05-5.36l.27-.08c.02.04.5 3.93 4.29 5.17 3.51 1.15 6.44-1.29 6.47-1.31l.2.24c-.05.04-3.08 2.57-6.72 1.38 0 0-.01 0-.01 0h.01a6.6 6.6 0 0 1-2.92-1.92 6.55 6.55 0 0 1-1.38-6.73c.38-1.07 1.05-2.02 1.92-2.91.07-.07.6-.6 1.41-1.24C11.66 7.42 12 7.29 12 7.29s.34.13 2.14 1.28c.81.64 1.34 1.17 1.41 1.24.87.89 1.54 1.84 1.92 2.91.56 1.59.56 3.28 0 4.87-.38 1.07-1.05 2.02-1.92 2.91-.07.07-.6.6-1.41 1.24-.04.03-.08.06-.12.09l.2.24c.05-.04.1-.08.14-.11.83-.66 1.38-1.21 1.46-1.29.92-1.07 1.57-1.98 1.97-3.1 1.32-3.79-.52-8.25-.56-8.34l-.26.1c.07.16 1.83 4.46.61 7.91-.39 1.1-1.03 1.99-1.92 3.03-.07.08-.62.63-1.46 1.29l-.02.02-.01-.01c-1.87-1.2-2.22-1.34-2.24-1.34s-.37.14-2.24 1.34l-.01.01-.02-.02c-.84-.66-1.39-1.21-1.46-1.29-.89-1.03-1.53-1.93-1.92-3.03C5.69 11.23 5.69 9.4 6.29 7.7c.4-1.12 1.05-2.03 1.97-3.1.08-.08.63-.63 1.46-1.29.07-.06.75-.55 1.76-1.12l-.15-.27c-1.04.58-1.74 1.1-1.82 1.16-.95 1.1-1.63 2.04-2.04 3.2C6.1 7.95 6.1 9.88 7.45 13.68c.03.09 1.88 4.54 5.67 3.23 0 0 .15-.05.42-.16l.1.28c-.28.11-.42.16-.43.16-.01 0 .01 0 0 0ZM12 4.44c-.79 0-1.58.26-2.25.77-.07.05-.6.44-1.42.92l.15.26c.79-.47 1.3-.84 1.36-.88 1.32-1.01 3-1.01 4.31 0 .06.05.57.41 1.36.88l.15-.26c-.82-.48-1.35-.87-1.42-.92a3.74 3.74 0 0 1-2.24-.77Zm0 13c-1.89 0-3.64-1.2-4.14-3.05-.48-1.8.1-3.66 1.55-4.8.96-.76 2.03-.96 3.1-.73.71.16 1.34.52 1.8 1.03 1.09 1.18 1.45 2.89.8 4.45-.6 1.44-1.83 2.51-3.23 2.97-.29.1-.59.13-.88.13Zm0-7.5c-.86 0-1.73.18-2.52.8-1.2 1-1.69 2.54-1.29 4.04.42 1.55 1.89 2.55 3.46 2.55.24 0 .49-.03.73-.11 1.17-.38 2.2-1.28 2.71-2.48.54-1.29.24-2.73-.67-3.71-.4-.44-.92-.74-1.5-.88l-.92-.21ZM9.11 3.52c-.68 0-1.37.15-2.02.46l.13.28c.6-.28 1.23-.42 1.85-.42 2.5 0 4.88 1.63 5.92 4.05.02.04 1.31 3.21-.99 6.22l.25.19C16.68 11.23 15.32 7.82 15.3 7.78c-1.12-2.6-3.67-4.35-6.37-4.36l.18.1Zm.74-2.19c-.38 0-.76.04-1.14.12l.06.3c.36-.08.71-.11 1.07-.11 3.75 0 7.02 2.45 7.97 6.32.03.11 1.13 4.85-2.78 8.44l.22.24c4.08-3.74 2.94-8.66 2.9-8.79-1-4.08-4.46-6.66-8.41-6.66l.11.14Z" />
                                            </svg>
                                        ),
                                        color: "bg-[#61DAFB]/10 text-[#61DAFB]"
                                    },
                                    {
                                        name: "Next.js",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 14.5v-9h-1.5v6.2l-5-6.2H8v9h1.5v-6.2l5 6.2H16z" />
                                            </svg>
                                        ),
                                        color: "bg-white/10 text-white"
                                    },
                                    {
                                        name: "PostgreSQL",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                            </svg>
                                        ),
                                        color: "bg-[#336791]/10 text-[#336791]"
                                    },
                                    {
                                        name: "Spring Boot",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M17.88 4.24c.71 1.34.56 3.65-.63 5.48-.37.58-.93 1-1.35 1.54 1.13.29 2.51-.2 3.19.86.63.99.21 2.51-.77 3.08-1 .59-2.28.18-3.32-.23-.21-.08-.43-.16-.64-.23 1.13 1.83 2.21 3.99.98 5.76-.79 1.13-2.5.85-3.66.44-1.39-.49-2.61-1.44-3.58-2.67-.78-1.01-1.28-2.48-1.42-3.8-.13-1.16.14-2.57.84-3.51.58-.78 1.4-1.37 2.3-1.74l.43-.16c-.03-.11-.06-.23-.08-.34-.23-.97-.13-2.07.49-2.85.74-.93 2.11-1.24 3.23-1.44 1.33-.24 2.87-.41 4 .81z" />
                                            </svg>
                                        ),
                                        color: "bg-[#6DB33F]/10 text-[#6DB33F]"
                                    },
                                    {
                                        name: "UX/UI",
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                            </svg>
                                        ),
                                        color: "bg-[#F24E1E]/10 text-[#F24E1E]"
                                    }
                                ].map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${tech.color} border border-white/5 backdrop-blur-sm cursor-default transition-all duration-300 hover:border-white/20 hover:shadow-lg`}
                                    >
                                        {tech.icon}
                                        <span className="font-semibold text-sm tracking-wide">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

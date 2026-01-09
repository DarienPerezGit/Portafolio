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

                        {/* Tech Stack */}
                        <div className="pt-8 border-t border-white/10 mt-12">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { name: 'React', icon: '/react-svgrepo-com.svg' },
                                    { name: 'Next.js', icon: '/next-js-svgrepo-com.svg' },
                                    { name: 'JavaScript', icon: '/js-svgrepo-com.svg' },
                                    { name: 'Node.js', icon: '/node-js-svgrepo-com.svg' },
                                    { name: 'PostgreSQL', icon: '/postgresql-logo-svgrepo-com.svg' },
                                    { name: 'Java', icon: '/java-logo-svgrepo-com.svg' },
                                    { name: 'Docker', icon: '/docker-svgrepo-com.svg' },
                                ].map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="group relative flex flex-col items-center justify-center"
                                    >
                                        <div className="w-16 h-16 relative bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-white/20 shadow-lg">
                                            <div className="relative w-8 h-8">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                            </div>
                                        </div>
                                        {/* Tooltip text */}
                                        <span className="absolute -bottom-8 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

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

                        {/* Stats or Highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 mt-12">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">3+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Years Exp.</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Projects</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Commitment</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

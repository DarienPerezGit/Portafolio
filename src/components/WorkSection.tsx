'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    year: string;
    image?: string; // URL de la imagen del proyecto
    link?: string; // URL del proyecto (puede ser GitHub, demo en vivo, etc.)
}

const projects: Project[] = [
    {
        id: 1,
        title: "Xeus",
        category: "FinTech Platform",
        description: "A comprehensive financial operating system for tracking crypto assets, exchanges, and wallets with real-time synchronization.",
        tags: ["React Native", "Spring Boot", "PostgreSQL", "Docker"],
        year: "2025",
        image: "/projects/xues.jpg",
        link: "https://github.com/DarienPerezGit/xeus", // Reemplaza con tu link real
    },
    {
        id: 2,
        title: "The Data Quality Auditor",
        category: "QA + Data Engineering",
        description: "Data quality audit tool for identifying and resolving data quality issues in real-time.",
        tags: ["Python", "SQL", "Excel"],
        year: "2025",
        image: "/projects/quality-data-project.PNG",
        link: "https://the-data-quality-auditor-2m8frn964fuutfznjoyiat.streamlit.app/", // Reemplaza con tu link real
    },
    {
        id: 3,
        title: "FullStack Application",
        category: "Programacion II",
        description: "System to manage the information that a holding company",
        tags: ["Java", "SpringBoot", "SQL", "HTML/CSS"],
        year: "2025",
        image: "/projects/Cable_vision_holding.PNG",
        link: "https://github.com/darien-perez-utn/cablevision_holding",
    },
    {
        id: 4,
        title: "Nativas",
        category: "E-commercce",
        description: "Nativas is a premium botanical brand reconnecting the modern world with the ancestral healing power of South America.",
        tags: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Vercel"],
        year: "2025",
        image: "/projects/Nativas.PNG",
        link: "https://nativas-two.vercel.app/", // Reemplaza con tu link real
    },
];

export default function WorkSection() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section id="work" className="relative min-h-screen bg-white py-32 px-8 overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#E0C3FC]/10 to-[#8EC5FC]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#8EC5FC]/10 to-[#E0C3FC]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="text-gray-500 text-sm font-medium tracking-[0.3em] uppercase mb-4">
                        Selected Projects
                    </div>
                    <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
                        <span className="text-gray-900">FEATURED </span>
                        <span className="bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
                            WORK
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl">
                        A curated selection of projects that showcase innovation, technical excellence, and creative problem-solving.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="group relative"
                        >
                            {/* Project Card */}
                            <div className="relative h-full bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-300 hover:shadow-xl">
                                {/* Image Preview Area */}
                                <div className="relative w-full h-64 bg-gradient-to-br from-[#E0C3FC]/10 to-[#8EC5FC]/10 overflow-hidden">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        // Placeholder cuando no hay imagen
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                                                    <svg
                                                        className="w-10 h-10 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1.5}
                                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-400 text-sm font-medium">Project Preview</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-40" />

                                    {/* Year Badge on Image */}
                                    <div className="absolute top-4 right-4 px-4 py-1 text-xs font-medium tracking-wider uppercase bg-white/90 backdrop-blur-md border border-gray-200 rounded-full text-gray-900">
                                        {project.year}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="relative p-8">
                                    {/* Gradient Overlay on Hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br from-[#E0C3FC]/5 to-[#8EC5FC]/5 opacity-0 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : ''
                                            }`}
                                    />

                                    <div className="relative z-10">
                                        {/* Category */}
                                        <div className="text-sm font-medium tracking-wide uppercase mb-3 bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
                                            {project.category}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-gray-700 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full hover:border-gray-300 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* View Project Link */}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                                            >
                                                <span>View Project</span>
                                                <motion.svg
                                                    animate={{
                                                        x: hoveredProject === project.id ? 5 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </motion.svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Shimmer Effect */}
                                <motion.div
                                    animate={{
                                        x: hoveredProject === project.id ? ['0%', '200%'] : '0%',
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                                />
                            </div>

                            {/* Glow Effect on Hover */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r from-[#E0C3FC]/20 to-[#8EC5FC]/20 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 -z-10 ${hoveredProject === project.id ? 'opacity-100' : ''
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 flex justify-center"
                >
                    <button className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300">
                        {/* Border Gradient */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] p-[2px]">
                            <div className="w-full h-full rounded-full bg-white transition-all duration-300 group-hover:opacity-0" />
                        </div>

                        {/* Gradient Fill on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Button Text */}
                        <span className="relative z-10 font-semibold tracking-wide transition-colors duration-300 text-gray-900 group-hover:text-white">
                            VIEW ALL PROJECTS
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EC5FC]/50 to-transparent" />
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactMethod {
    id: number;
    icon: string;
    title: string;
    value: string;
    link: string;
    description: string;
}

const contactMethods: ContactMethod[] = [
    {
        id: 1,
        icon: 'email',
        title: 'Email',
        value: 'ndarien93@gmail.com',
        link: 'mailto:ndarien93@gmail.com',
        description: 'Send me an email',
    },
    {
        id: 2,
        icon: 'github',
        title: 'GitHub',
        value: '@DarienPerezGit',
        link: 'https://github.com/DarienPerezGit',
        description: 'Check out my code',
    },
    {
        id: 3,
        icon: 'linkedin',
        title: 'LinkedIn',
        value: 'Darien Perez',
        link: 'https://twitter.com/darienperez',
        description: 'Let\'s connect professionally',
    },
];

export default function ContactSection() {
    const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Reemplaza 'TU_FORM_ID' con tu Form ID de Formspree
            // Ejemplo: si tu URL es https://formspree.io/f/xyzabc123, usa 'xyzabc123'
            const response = await fetch('https://formspree.io/f/xykzykwg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                alert('¡Mensaje enviado! Te responderé pronto.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
            }
        } catch (error) {
            alert('Error de conexión. Por favor intenta de nuevo más tarde.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'email':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case 'github':
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                );
            case 'twitter':
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section id="contact" className="relative min-h-screen bg-white py-32 px-8 overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-[#E0C3FC]/10 to-[#8EC5FC]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-tl from-[#8EC5FC]/10 to-[#E0C3FC]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <div className="text-gray-500 text-sm font-medium tracking-[0.3em] uppercase mb-4">
                        Get In Touch
                    </div>
                    <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
                        <span className="text-gray-900">LET'S </span>
                        <span className="bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
                            CONNECT
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Methods</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.id}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    onMouseEnter={() => setHoveredMethod(method.id)}
                                    onMouseLeave={() => setHoveredMethod(null)}
                                    className="group relative"
                                >
                                    <div className="relative h-full bg-white border border-gray-200 rounded-xl p-6 transition-all duration-500 hover:border-gray-300 hover:shadow-lg">
                                        {/* Gradient Overlay on Hover */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br from-[#E0C3FC]/5 to-[#8EC5FC]/5 rounded-xl opacity-0 transition-opacity duration-500 ${hoveredMethod === method.id ? 'opacity-100' : ''
                                                }`}
                                        />

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#E0C3FC]/20 to-[#8EC5FC]/20 flex items-center justify-center text-gray-700 group-hover:scale-110 transition-transform duration-300">
                                                {getIcon(method.icon)}
                                            </div>

                                            {/* Title */}
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                                {method.title}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-sm text-gray-500 mb-2">
                                                {method.description}
                                            </p>

                                            {/* Value */}
                                            <p className="text-sm font-medium bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
                                                {method.value}
                                            </p>
                                        </div>

                                        {/* Arrow Icon */}
                                        <motion.div
                                            animate={{
                                                x: hoveredMethod === method.id ? 5 : 0,
                                                opacity: hoveredMethod === method.id ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute top-6 right-6"
                                        >
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-r from-[#E0C3FC]/20 to-[#8EC5FC]/20 rounded-xl blur-lg opacity-0 transition-opacity duration-500 -z-10 ${hoveredMethod === method.id ? 'opacity-100' : ''
                                            }`}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#8EC5FC] focus:ring-2 focus:ring-[#8EC5FC]/20 transition-all duration-300 text-gray-900"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#8EC5FC] focus:ring-2 focus:ring-[#8EC5FC]/20 transition-all duration-300 text-gray-900"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#8EC5FC] focus:ring-2 focus:ring-[#8EC5FC]/20 transition-all duration-300 resize-none text-gray-900"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full px-8 py-4 rounded-full overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {/* Border Gradient */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] p-[2px]">
                                    <div className="w-full h-full rounded-full bg-white transition-all duration-300 group-hover:opacity-0" />
                                </div>

                                {/* Gradient Fill on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Button Text */}
                                <span className="relative z-10 font-semibold tracking-wide transition-colors duration-300 text-gray-900 group-hover:text-white flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EC5FC]/50 to-transparent" />
        </section>
    );
}

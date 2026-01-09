'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import WaveBackground from './WaveBackground';
import { contactMethods } from '@/data/contact';
import { Icons } from '@/components/ui/Icons';

export default function ContactSection() {
    const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('idle');

        try {
            const response = await fetch('https://formspree.io/f/xykzykwg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
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
                return <Icons.Email className="w-6 h-6" />;
            case 'github':
                return <Icons.GitHub className="w-6 h-6" />;
            case 'linkedin':
                return <Icons.LinkedIn className="w-6 h-6" />;
            case 'twitter':
                return <Icons.Twitter className="w-6 h-6" />;
            default:
                return null;
        }
    };

    return (
        <section id="contact" className="relative min-h-screen bg-white py-32 px-8 overflow-hidden">
            {/* Background Waves */}
            <WaveBackground theme="light" />

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
                                            <Icons.ArrowRight className="w-5 h-5 text-gray-400" />
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
                            <div className="space-y-4">
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
                                                <Icons.Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                {formStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-green-50 text-green-700 text-sm text-center border border-green-200"
                                    >
                                        Message sent! I'll get back to you soon.
                                    </motion.div>
                                )}

                                {formStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-red-50 text-red-700 text-sm text-center border border-red-200"
                                    >
                                        Something went wrong. Please try again later.
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EC5FC]/50 to-transparent" />
        </section>
    );
}

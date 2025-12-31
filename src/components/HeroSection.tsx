'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Atmospheric Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-br from-[#E0C3FC]/10 to-[#8EC5FC]/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 flex items-center justify-between"
        >
          <div className="flex gap-8 items-center">
            <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium tracking-wide">
              WORK
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium tracking-wide">
              ABOUT
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium tracking-wide">
              CONTACT
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32 pb-20">

        {/* Left Side - Text Content */}
        <div className="space-y-8">
          {/* Eyebrow Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#B3B3B3] text-sm font-medium tracking-[0.3em] uppercase"
          >
            Software Engineer
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight"
          >
            <span className="text-gray-900">DARIEN</span>
            <br />
            <span className="text-white"></span>
            <span className="bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
              PEREZ
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#B3B3B3] text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Crafting elegant solutions through code. Transforming complex problems into seamless digital experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
            >
              {/* Border Gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] p-[2px]">
                <div className={`w-full h-full rounded-full bg-white transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
              </div>

              {/* Gradient Fill on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

              {/* Button Text */}
              <span className={`relative z-10 font-semibold tracking-wide transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                VIEW MY WORK
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Side - 3D Abstract Element */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-lg aspect-square"
          >
            {/* Breathing Animation Container */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              {/* Main Geometric Shape - Hexagon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Outer Hexagon */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC] opacity-20" />
                  </motion.div>

                  {/* Middle Hexagon */}
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-[15%]"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-tl from-[#E0C3FC] to-[#8EC5FC] opacity-30" />
                  </motion.div>

                  {/* Inner Hexagon */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-[30%]"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC] opacity-50" />
                  </motion.div>

                  {/* Center Core */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-[45%] rounded-full bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC]"
                  />
                </div>
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#E0C3FC] to-[#8EC5FC]"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 3) * 20}%`,
                  }}
                />
              ))}

              {/* Shimmer Effect */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 2,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E0C3FC]/20 to-[#8EC5FC]/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8EC5FC]/50 to-transparent" />
    </section>
  );
}

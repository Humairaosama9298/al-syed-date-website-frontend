'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative h-[85vh] sm:h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 text-white px-4 sm:px-8 max-w-3xl">
        {/* 🌟 Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight drop-shadow-xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          You deserve the best — and we’re delivering what you deserve.
        </motion.h1>

        {/* 💬 Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/90 mb-3 md:mb-4 font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Thank you for connecting with us.
        </motion.p>

        {/* 🌐 Website Link */}
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-8 text-secondary font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="https://www.alsyedbrothers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white transition-colors"
          >
            www.alsyedbrothers.com
          </a>
        </motion.p>

        {/* 🔘 Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link
            href="/products"
            className="bg-primary text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Explore Varieties
          </Link>

          <Link
            href="/contact"
            className="border border-white/60 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
          >
            Contact for Export
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

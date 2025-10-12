'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 text-white px-4">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-serif font-medium drop-shadow-lg leading-snug mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          You deserve the best, and we are delivering what you deserve.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl font-inter mb-4 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Thanks for connecting with us.
        </motion.p>

        {/* Website link */}
        <motion.p
          className="text-base md:text-lg mb-10 font-inter text-secondary font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="www.alsyedbrother.com"
          >www.alsyedbrother.com</a>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/products"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-secondary hover:text-white transition"
          >
            Explore Varieties
          </Link>

          <Link
            href="/contact"
            className="border border-white/50  text-white bg-bg/20 font-semibold px-6 py-3  backdrop-blur-sm rounded-sm hover:bg-white hover:text-primary transition"
          >
            Contact for Export
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

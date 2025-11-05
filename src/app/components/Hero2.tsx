'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const images = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
    '/images/hero5.jpg',
    '/images/hero6.jpg',
  ]

  const [current, setCurrent] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="bg-black/50 relative h-[85vh] sm:h-[90vh] overflow-hidden flex items-center justify-center">
      {/* ===== Image Slider Background ===== */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt="Hero background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
            style={{
              filter: 'brightness(0.95)',
            }}
          />
        </AnimatePresence>
      </div>

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ===== Content Layout (kept lower) ===== */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-6 lg:px-12 text-white translate-y-12 sm:translate-y-16 md:translate-y-20 lg:translate-y-28 xl:translate-y-32">
        {/* 🌟 Left Text Section */}
        <motion.div
          className="max-w-xl text-center lg:text-left order-1 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl xl:text-5xl font-serif font-medium lg:font-light leading-tight drop-shadow-xl mb-5">
            You deserve the best and we’re delivering what you deserve.
          </h1>

          <p className="text-base sm:text-lg text-white/90 mb-3 font-inter">
            Thank you for connecting with us.
          </p>

          <p className="text-sm sm:text-base mb-4 text-secondary font-semibold tracking-wide">
            <a
              href="https://www.alsyedbrothers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white transition-colors"
            >
              www.alsyedbrothers.com
            </a>
          </p>
        </motion.div>

        {/* 🔘 Right Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center lg:items-end gap-4 sm:gap-6 order-2 lg:order-2 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/products"
            className="bg-primary text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-secondary transition-all duration-300 text-base sm:text-lg"
          >
            Explore Varieties
          </Link>

          <Link
            href="/contact"
            className="border border-white/70 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm text-base sm:text-lg"
          >
            Contact for Export
          </Link>
        </motion.div>
      </div>

      {/* 🔹 Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              current === index ? 'bg-primary scale-110' : 'bg-white/40'
            }`}
          ></div>
        ))}
      </div>
    </section>
  )
}

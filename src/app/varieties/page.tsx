'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
} from '../../utils/animations'
import { JSX } from 'react'

interface Variety {
  name: string
  desc: string
  image: string
}

export default function Varieties(): JSX.Element {
  const varieties: Variety[] = [
    {
      name: 'Aseel Dates',
      desc: 'Rich in flavor and naturally sweet — perfect for export worldwide.',
      image: '/images/aseel-date.png',
    },
    {
      name: 'Rabbi Dates',
      desc: 'Soft texture with balanced sweetness — a popular choice in global markets.',
      image: '/images/begum.png',
    },
    {
      name: 'Khudri Dates',
      desc: 'Dark brown dates known for their chewy texture and deep caramel taste.',
      image: '/images/mazafati.1.png',
    },
    {
      name: 'Mazafati Dates',
      desc: 'Soft, juicy, and full of energy — the king of dates for everyday use.',
      image: '/images/full date.png',
    },
  ]

  return (
    <section className="container max-w-7xl mx-auto py-16 md:py-28 px-4 lg:px-6">
      {/* ===== Page Heading ===== */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary text-center mb-8 leading-tight"
        {...fadeInDown}
      >
        Premium <span className="text-dark font-medium">Varieties of Dates</span>
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-dark/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        {...fadeInUp}
      >
        Explore our finest range of <strong>Pakistani dates</strong> — each variety
        carefully hand-picked for its unique flavor, texture, and natural sweetness.
      </motion.p>

      {/* ===== Variety Grid ===== */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {varieties.map((item: Variety, index: number) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            variants={fadeInUp}
            {...cardHover}
          >
            {/* 🖼️ Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
              <Image
                src={item.image as string}
                alt={item.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 📝 Text */}
            <div className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-serif text-primary mb-2">
                {item.name}
              </h3>
              <p className="text-dark/70 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Footer Note ===== */}
      <motion.div
        className="text-center mt-20 max-w-2xl mx-auto"
        {...fadeIn}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-primary mb-3">
          Naturally Sweet, Nutrient-Rich, and Globally Loved
        </h2>
        <p className="text-dark/70 text-base sm:text-lg leading-relaxed">
          From <strong>Pakistan’s sun-soaked farms</strong> to tables across the world — 
          our dates are a symbol of purity, heritage, and quality you can taste.
        </p>
      </motion.div>
    </section>
  )
}

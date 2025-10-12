'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Varieties() {
  const varieties = [
    {
      name: 'Aseel Dates',
      desc: 'Rich in flavor and naturally sweet — perfect for export worldwide.',
      image:
        "/images/aseel-date.png",
    },
    {
      name: 'Rabbi Dates',
      desc: 'Soft texture with balanced sweetness — a popular choice in global markets.',
      image:
        "/images/begum.png",
    },
    {
      name: 'Khudri Dates',
      desc: 'Dark brown dates known for their chewy texture and deep caramel taste.',
      image:
        "/images/khudri.jpg",
    },
    {
      name: 'Mazafati Dates',
      desc: 'Soft, juicy, and full of energy — the king of dates for everyday use.',
      image:
       "/images/full date.png",
    },
  ]

  return (
    <section className="relative  text-center">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Varieties of Dates
      </motion.h1>

      <motion.p
        className="text-text text-lg px-4 md:text-xl mb-16 font-inter max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore our premium range of Pakistani Dates — hand-picked, naturally sweet,
        and packed with nutrition.
      </motion.p>

      {/* Variety Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {varieties.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-secondary/40"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              height={200}
              width={200}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"></Image>
            
            <div className="p-6">
              <h3 className="text-2xl font-playfair text-primary mb-2">
                {item.name}
              </h3>
              <p className="text-dark/80 font-inter text-base">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

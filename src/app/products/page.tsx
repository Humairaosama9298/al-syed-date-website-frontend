'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLeaf, FaDrumstickBite, FaCookieBite, FaSeedling } from 'react-icons/fa'

export default function ProductsPage() {
  const products = [
    {
      id: '01',
      title: 'Pakistani Dates',
      icon: <FaLeaf className="text-4xl text-primary" />,
      image: '/images/pakistani-date.jpg',
      features: [
        'Best quality of Pakistani Dates',
        'Sweet, healthy & ready to serve',
      ],
    },
    {
      id: '02',
      title: 'Pakistani Fried Onion',
      icon: <FaDrumstickBite className="text-4xl text-primary" />,
      image: '/images/fried-onion.jpg',
      features: ['Premium Quality Fried Onion', 'Best Ingredients Used'],
    },
    {
      id: '03',
      title: 'Roasted Black Chickpeas',
      icon: <FaCookieBite className="text-4xl text-primary" />,
      image: '/images/chickpea1.jpg',
      features: ['Nutrient-rich and low in calories', 'Supports bone strength'],
    },
    {
      id: '04',
      title: 'Dry Vegetable',
      icon: <FaSeedling className="text-4xl text-primary" />,
      image: '/images/vagetables.jpg',
      features: ['Professionally dried', 'Extended shelf life'],
    },
  ]

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-bg " />

      <div className="relative z-10 container mx-auto px-6 text-center text-primary">
        <motion.h1
          className="text-4xl md:text-5xl font-serif mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Premium Products
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-16 font-inter max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          From Pakistan’s farms to your tables — delivering nature’s richness with quality and care.
        </motion.p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 bg-white/95 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Product Image */}
              <div className="w-full md:w-1/3">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-48 md:h-40"
                />
              </div>

              {/* Product Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-bold text-primary">{product.id}</div>
                  {product.icon}
                </div>

                <h3 className="text-2xl font-playfair font-semibold text-primary mb-2">
                  {product.title}
                </h3>

                <ul className="text-dark/80 space-y-1 font-inter">
                  {product.features.map((feature, i) => (
                    <li key={i}>➢ {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FaLeaf, FaDrumstickBite, FaCookieBite, FaSeedling } from 'react-icons/fa'

export default function ProductsPage() {
  const products = [
    {
      id: '01',
      title: 'Pakistani Dates',
      icon: <FaLeaf className="text-4xl text-primary" />,
      features: [
        'Best quality of Pakistani Dates',
        'Sweets, Healthy & Direct Serve',
      ],
    },
    {
      id: '02',
      title: 'Pakistani Fried Onion',
      icon: <FaDrumstickBite className="text-4xl text-primary" />,
      features: ['Premium Quality Fried Onion', 'Best Ingredients Used'],
    },
    {
      id: '03',
      title: 'Roasted Black Chickpeas',
      icon: <FaCookieBite className="text-4xl text-primary" />,
      features: ['Nutrient and low in calories', 'Increase bone strength'],
    },
    {
      id: '04',
      title: 'Dry Vegetable',
      icon: <FaSeedling className="text-4xl text-primary" />,
      features: ['Drying with equipment', 'Increase shelf life'],
    },
  ]

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/images/products-bg.jpg')" }} // background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8b5a3c]/40 backdrop-blur-[2px]"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.h1
          className="text-4xl md:text-5xl font-playfair font-bold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Premium Products
        </motion.h1>

        <motion.p
          className="text-white/90 text-lg md:text-xl mb-16 font-inter max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          From Pakistan’s farms to your tables — delivering nature’s richness with quality and care.
        </motion.p>

        {/* Products List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 bg-white/90 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex-shrink-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {product.id}
                </div>
                {product.icon}
              </div>

              <div>
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

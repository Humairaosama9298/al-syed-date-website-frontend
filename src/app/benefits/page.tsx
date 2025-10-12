'use client'

import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaBrain, FaAppleAlt } from 'react-icons/fa'

export default function DatesBenefits() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-dark "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1615485737459-90859c7c1a9f?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-light"></div>

      <div className="relative container mx-auto px-6 z-10 text-center text-white">
        {/* Heading */}
        <motion.h1
          className="text-dark text-4xl md:text-5xl font-serif mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Dates: Keep The Body Energized
        </motion.h1>

        <motion.p
          className="text-white/90 text-lg md:text-xl mb-16 max-w-3xl mx-auto drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dates are nutritious fruits from palm trees grown specially in Karachi,
          Sindh, Pakistan — rich in natural sweetness and packed with health benefits.
        </motion.p>

        {/* ====== Benefits Section ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
          {/* Nutrition */}
          <motion.div
            className="bg-white/90 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaAppleAlt className="text-3xl text-primary" />
              <h3 className="text-2xl font-playfair font-semibold text-primary">
                High in Nutrition
              </h3>
            </div>
            <p className="text-dark/80 font-inter mb-2">
              Dates contain essential nutrients like carbs, proteins, vitamins, and
              fibres — supporting bone health, blood sugar balance, and lowering
              cholesterol.
            </p>
            <ul className="text-dark/70 space-y-1 font-inter">
              <li>• Bone health</li>
              <li>• Blood sugar level</li>
              <li>• Lowers cholesterol</li>
            </ul>
          </motion.div>

          {/* Natural Sweeteners */}
          <motion.div
            className="bg-white/90 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaLeaf className="text-3xl text-primary" />
              <h3 className="text-2xl font-playfair font-semibold text-primary">
                Natural Sweeteners
              </h3>
            </div>
            <p className="text-dark/80 font-inter mb-2">
              Dates have a sweet, caramel-like taste that makes them the perfect
              natural alternative to sugar while adding nutrition and antioxidants.
            </p>
            <ul className="text-dark/70 space-y-1 font-inter">
              <li>• Sweet taste</li>
              <li>• Nutrients and Antioxidants</li>
              <li>• Improves health</li>
            </ul>
          </motion.div>

          {/* Boost Immunity */}
          <motion.div
            className="bg-white/90 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaHeart className="text-3xl text-primary" />
              <h3 className="text-2xl font-playfair font-semibold text-primary">
                Boosts Immunity
              </h3>
            </div>
            <p className="text-dark/80 font-inter">
              Studies show that consuming dates strengthens immunity and increases
              antibody responses, protecting against diseases.
            </p>
          </motion.div>

          {/* Brain Health */}
          <motion.div
            className="bg-white/90 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBrain className="text-3xl text-primary" />
              <h3 className="text-2xl font-playfair font-semibold text-primary">
                Boost Brain Health
              </h3>
            </div>
            <p className="text-dark/80 font-inter">
              Rich in antioxidants and essential nutrients, dates support memory,
              learning, and protect the brain from oxidative stress.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

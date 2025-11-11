'use client'

import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaBrain, FaAppleAlt } from 'react-icons/fa'

export default function DatesBenefits() {
  return (
    <section
      className="container bg-black max-w-7xl mx-auto py-16 md:py-28 px-4 lg:px-6"
      aria-labelledby="dates-benefits-heading"
    >
      {/* ===== Heading ===== */}
      <motion.h1
        id="dates-benefits-heading"
        className="text-3xl sm:text-4xl md:text-5xl font-serif text-secondary text-center mb-12 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Health Benefits of <span className="text-secondary font-medium">Dates</span>
      </motion.h1>

      <motion.p
        className="text-light/50 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Dates are a natural powerhouse of nutrients grown in the warm regions of
        Pakistan. They provide energy, strengthen immunity, and support overall
        well-being — making them a perfect part of a healthy lifestyle.
      </motion.p>

      {/* ===== Benefits Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
        {/* === Nutrition === */}
        <motion.article
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaAppleAlt className="text-4xl text-primary" aria-label="Nutrition Icon" />
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-primary">
              High in Nutrition
            </h2>
          </div>
          <p className="text-dark/80 mb-3">
            Rich in essential vitamins, minerals, and fiber, dates help support
            bone strength, digestion, and balanced blood sugar levels.
          </p>
          <ul className="text-dark/70 space-y-1 list-disc list-inside">
            <li>Strengthens bones</li>
            <li>Supports digestion</li>
            <li>Regulates sugar levels</li>
          </ul>
        </motion.article>

        {/* === Natural Sweetener === */}
        <motion.article
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaLeaf className="text-4xl text-primary" aria-label="Natural Sweetener Icon" />
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-primary">
              Natural Sweetener
            </h2>
          </div>
          <p className="text-dark/80 mb-3">
            With a naturally sweet, caramel-like taste, dates are a healthy
            alternative to refined sugar and full of beneficial antioxidants.
          </p>
          <ul className="text-dark/70 space-y-1 list-disc list-inside">
            <li>Natural sugar substitute</li>
            <li>Rich in antioxidants</li>
            <li>Provides lasting energy</li>
          </ul>
        </motion.article>

        {/* === Boost Immunity === */}
        <motion.article
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaHeart className="text-4xl text-primary" aria-label="Immunity Icon" />
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-primary">
              Strengthens Immunity
            </h2>
          </div>
          <p className="text-dark/80">
            The natural compounds in dates boost immunity, promote heart health,
            and reduce the risk of infections and fatigue.
          </p>
        </motion.article>

        {/* === Brain Health === */}
        <motion.article
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaBrain className="text-4xl text-primary" aria-label="Brain Health Icon" />
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-primary">
              Supports Brain Health
            </h2>
          </div>
          <p className="text-dark/80">
            Dates contain antioxidants that enhance memory, support focus, and
            protect brain cells from oxidative stress.
          </p>
        </motion.article>
      </div>
    </section>
  )
}

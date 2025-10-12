'use client'

import { motion } from 'framer-motion'
import { FaSeedling, FaLeaf, FaBoxOpen, FaGlobeAmericas } from 'react-icons/fa'

export default function FromFarm() {
  const steps = [
    {
      title: 'Harvest',
      desc: 'Carefully picked at peak ripeness',
      icon: <FaSeedling className="text-5xl text-secondary mx-auto mb-4" />,
    },
    {
      title: 'Clean',
      desc: 'Hygienic processing standards',
      icon: <FaLeaf className="text-5xl text-secondary mx-auto mb-4" />,
    },
    {
      title: 'Pack',
      desc: 'Premium quality packaging',
      icon: <FaBoxOpen className="text-5xl text-secondary mx-auto mb-4" />,
    },
    {
      title: 'Export',
      desc: 'Delivered worldwide',
      icon: <FaGlobeAmericas className="text-5xl text-secondary mx-auto mb-4" />,
    },
  ]

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-center "
      style={{ backgroundImage: "url('/images/farm.jpg')" }}
    >
      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-[#8b5a3c]/80 backdrop-blur-[2px]  "></div>

      <div className="relative container z-10">
        {/* ===== Heading ===== */}
        <motion.h1
          className="text-3xl md:text-4xl font-playfair text-white mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          From Farm to Global Tables
        </motion.h1>

        <motion.p
          className="text-white/90 md:text-xl mb-16 max-w-3xl mx-auto drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our commitment to excellence is reflected in every step of our process, 
          ensuring you receive only the finest quality dates.
        </motion.p>

        {/* ===== Steps ===== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-white"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {step.icon}
              <h3 className="text-2xl font-playfair font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-white/85 font-inter text-base max-w-[220px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

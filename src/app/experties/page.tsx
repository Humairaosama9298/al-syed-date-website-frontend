'use client'

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { FaGlobe, FaShippingFast, FaCheckCircle, FaUserTie, FaSmile } from 'react-icons/fa';

export default function Expertise() {
  const stats = [
    { icon: <FaGlobe className="text-primary text-4xl mb-3" />, value: '15+', label: 'Countries Exported' },
    { icon: <FaShippingFast className="text-primary text-4xl mb-3" />, value: '500+', label: 'Tons Exported' },
    { icon: <FaCheckCircle className="text-primary text-4xl mb-3" />, value: '100%', label: 'Quality Assured' },
    { icon: <FaUserTie className="text-primary text-4xl mb-3" />, value: '10+', label: 'Years of Experience' },
    { icon: <FaSmile className="text-primary text-4xl mb-3" />, value: '100+', label: 'Happy Clients' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-white">
      <motion.div
        className="container max-w-7xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-normal mb-14 text-center font-serif text-primary"
          variants={fadeInUp}
        >
          Our <span className="text-primary">Expertise</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={fadeInUp}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-3xl font-bold text-brown-800">{item.value}</h3>
                <p className="text-gray-600 mt-2">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

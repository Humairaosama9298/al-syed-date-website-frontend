'use client'

import { FaSeedling, FaGlobe, FaHandshake } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '../../utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-16 md:py-28 px-4 lg:px-6">
      {/* ===== Page Heading ===== */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary text-center mb-12 leading-tight"
        {...fadeInDown}
      >
        About <span className="text-dark font-medium">Al-Syed Brothers</span>
      </motion.h1>

      {/* ===== Company Overview ===== */}
      <motion.section
        className="mb-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16"
        {...fadeInUp}
      >
        {/* 🖼️ Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            className="rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
            src="/images/herosection.png"
            alt="Workers processing premium Pakistani dates at Al-Syed Brothers factory"
            width={600}
            height={400}
            priority
          />
        </div>

        {/* ✨ Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <p className="text-base sm:text-lg text-dark/80 leading-relaxed">
            <strong>Al-Syed Brothers</strong> is a leading exporter of
            <strong> premium quality dates</strong> from Pakistan’s finest
            date-producing regions. With decades of expertise in cultivation,
            processing, and global trade, we bring the natural sweetness and
            nutrition of Pakistani dates to tables around the world.
          </p>
          <p className="text-base sm:text-lg text-dark/70 leading-relaxed">
            Our focus on <strong>quality, sustainability,</strong> and
            <strong> fair trade</strong> ensures that every product reflects our
            commitment to excellence — from the farms to your home.
          </p>
        </div>
      </motion.section>

      {/* ===== Core Values Section ===== */}
      <motion.section className="mb-24" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary text-center mb-12"
          {...fadeInUp}
        >
          Our Core Values
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* 🌱 Quality */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaSeedling
              className="h-12 w-12 text-primary mx-auto mb-4"
              aria-label="Quality Assurance Icon"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-brown-800">
              Quality Assurance
            </h3>
            <p className="text-gray-600">
              From harvesting to packaging, every date is handled with utmost
              care to ensure the highest standards of freshness and taste.
            </p>
          </motion.div>

          {/* 🌍 Global Export */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGlobe
              className="h-12 w-12 text-primary mx-auto mb-4"
              aria-label="Global Presence Icon"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-brown-800">
              Global Presence
            </h3>
            <p className="text-gray-600">
              Exporting to Asia, Europe, and the Middle East with consistent
              quality, reliability, and excellence.
            </p>
          </motion.div>

          {/* 🤝 Integrity */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaHandshake
              className="h-12 w-12 text-primary mx-auto mb-4"
              aria-label="Commitment and Trust Icon"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-brown-800">
              Commitment & Trust
            </h3>
            <p className="text-gray-600">
              We build lasting relationships based on integrity, transparency,
              and shared values of excellence.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== Experience & Heritage ===== */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white p-8 text-center rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-brown-800">
              Decades of Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Founded by agricultural experts, Al-Syed Brothers has led
              Pakistan’s date industry with traditional farming blended with
              modern export standards for unparalleled quality.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 text-center rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-brown-800">
              Sustainable Farming
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Sustainability drives every decision — from eco-friendly farming
              to fair trade practices supporting local communities.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

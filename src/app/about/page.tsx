'use client'

import { FaSeedling, FaGlobe, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '../../utils/animations';

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">
      {/* ===== Page Heading ===== */}
      <motion.h1
        className="text-4xl font- mb-10 text-center"
        {...fadeInDown}
      >
      <span className="text-primary font-serif">Al - Syed Brothers</span>
      </motion.h1>

      {/* ===== Company Overview ===== */}
      <motion.section className="mb-16 text-center space-y-8" {...fadeInUp}>
        <p className="md:text-lg text-dark/80 max-w-3xl mx-auto leading-relaxed">
          Al-Syed Brothers is a leading exporter of <strong>premium quality dates</strong> from the heart of Pakistan’s finest date-producing regions.
          With decades of experience in cultivation, processing, and international trade, our mission is to bring
          the natural sweetness and nutritional value of our dates to customers across the world.
        </p>
        <Image 
        className="h-full w-full rounded-lg py-"
        src="/images/herosection.png"
        alt="about-image"
        width={200}
        height={200}
        >
        </Image>
      </motion.section>

      {/* ===== Mission / Vision / Values ===== */}
      <motion.section
        className="mb-20"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >

        <motion.h2
          className="text-3xl font-normal mb-4 text-center font-serif text-primary"
          {...fadeInUp}
        >
            Our Core Values
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Quality */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaSeedling className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-brown-800">Quality Assurance</h3>
            <p className="text-gray-600">
              From harvesting to packaging, every date is handled with the utmost care to ensure
              the highest standards of freshness, taste, and quality.
            </p>
          </motion.div>

          {/* Global Export */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGlobe className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-brown-800">Global Presence</h3>
            <p className="text-gray-600">
              We proudly export to markets across Asia, Europe, and the Middle East — maintaining trust and excellence
              through consistent quality and timely delivery.
            </p>
          </motion.div>

          {/* Integrity */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaHandshake className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-brown-800">Commitment & Trust</h3>
            <p className="text-gray-600">
              Our long-term relationships with farmers and buyers are built on transparency,
              integrity, and a shared passion for excellence.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== Experience & Heritage ===== */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-brown-700"
          {...fadeInUp}
        >
          Our Heritage
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2 text-brown-800">
              Decades of Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded by agricultural experts, Al-Syed Brothers has been at the forefront of Pakistan’s date industry.
              Our experience in traditional farming techniques combined with modern export standards allows us to deliver unmatched quality.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2 text-brown-800">
              Sustainable Farming
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sustainability lies at the heart of our operations. We ensure eco-friendly farming,
              fair trade practices, and continuous support for local farming communities.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== Certification / Quality Section ===== */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-brown-700"
          {...fadeInUp}
        >
          Certifications & Standards
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2 text-brown-800">
              ISO & HACCP Certified
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our processing and packaging facilities are ISO and HACCP certified to meet the highest international safety and quality standards.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2 text-brown-800">
              Organic & Export-Grade Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Each batch is carefully selected, processed, and packaged to preserve its natural flavor, texture, and freshness.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

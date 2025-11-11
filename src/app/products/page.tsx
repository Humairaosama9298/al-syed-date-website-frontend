"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLeaf,
  FaDrumstickBite,
  FaCookieBite,
  FaSeedling,
} from "react-icons/fa";

export default function Products() {
  const products = [
    {
      id: "01",
      title: "Pakistani Dates",
      icon: <FaLeaf className="text-3xl text-primary" />,
      image: "/images/pakistani-date.jpg",
      features: [
        "Best quality of Pakistani Dates",
        "Sweet, healthy & ready to serve",
      ],
    },
    {
      id: "02",
      title: "Pakistani Fried Onion",
      icon: <FaDrumstickBite className="text-3xl text-primary" />,
      image: "/images/fried-onion.jpg",
      features: ["Premium Quality Fried Onion", "Best Ingredients Used"],
    },
    {
      id: "03",
      title: "Roasted Black Chickpeas",
      icon: <FaCookieBite className="text-3xl text-primary" />,
      image: "/images/chickpea1.jpg",
      features: [
        "Nutrient-rich and low in calories",
        "Supports bone strength",
      ],
    },
    {
      id: "04",
      title: "Dry Vegetable",
      icon: <FaSeedling className="text-3xl text-primary" />,
      image: "/images/vagetables.jpg",
      features: ["Professionally dried", "Extended shelf life"],
    },
  ];

  return (
    <section className="bg-black/30 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* ====== Section Heading ====== */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-playfair text-secondary mb-6"
        >
          Our Premium Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-light/50 text-lg max-w-2xl mx-auto mb-16"
        >
          From Pakistan’s fertile farms to your tables — bringing nature’s
          richness, freshness, and purity with unmatched care.
        </motion.p>

        {/* ====== Product Cards Grid ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white/90 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all overflow-hidden text-left backdrop-blur-sm"
            >
              {/* Product Image */}
              <div className="relative w-full h-56 md:h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-xl font-semibold text-secondary">
                    {product.id}
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    {product.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-playfair font-semibold text-primary mb-3">
                  {product.title}
                </h3>

                <ul className="text-dark/80 space-y-1 font-inter leading-relaxed">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">➤</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

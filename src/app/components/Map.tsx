"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

// 🗺️ Dynamically import MapContainer-related code (SSR disabled)
const MapInner = dynamic(() => import("./Mapinner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center text-dark/60">
      Loading map...
    </div>
  ),
});

export default function Map() {
  return (
    <div className="w-full h-[600px] pt-24 space-y-10 overflow-hidden">
      <motion.div {...fadeInUp}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary text-center leading-tight font-normal">
          Global Reach, Local Care
        </h2>
        <p className="text-dark/70 text-center py-4 max-w-3xl mx-auto text-lg sm:text-xl">
          Delivering Nature&apos;s Sweetness Across Continents
        </p>
      </motion.div>

      {/* ✅ Render map only on client */}
      <MapInner />
    </div>
  );
}

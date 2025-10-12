"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

// 🗺️ Dynamically import MapContainer-related code (SSR disabled)
const MapInner = dynamic(() => import("./Mapinner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center text-dark/60">
      Loading map...
    </div>
  ),
});

export default function Map() {
  return (
    <div className="w-full h-[400px] py-10 space-y-10 overflow-hidden">
      <motion.div {...fadeInUp}>
        <h2 className="text-3xl font-normal mb-4 text-center font-serif text-primary">
          Global Reach, Local Care
        </h2>
        <p className="text-dark/70 text-center">
          Delivering Nature&apos;s Sweetness Across Continents
        </p>
      </motion.div>

      {/* ✅ Render map only on client */}
      <MapInner />
    </div>
  );
}

'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';

// Marker icon (default pin)
const icon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
})

export default function MapComponent() {
  const karachiPosition: [number, number] = [24.8607, 67.0011]

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

      <MapContainer
        center={karachiPosition}
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        <Marker position={karachiPosition} icon={icon}>
          <Popup>
            Karachi, Sindh <br /> Export Hub of Al Syed Brothers
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

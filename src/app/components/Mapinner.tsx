"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🧭 Custom marker icon
const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});

export default function MapInner() {
  const karachiPosition: [number, number] = [24.8607, 67.0011];

  return (
    <MapContainer
      center={karachiPosition}
      zoom={6}
      scrollWheelZoom={false}
      className="w-full h-full rounded-lg"
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
  );
}

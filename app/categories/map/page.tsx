"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { nationalParksData } from "./nationalParksData";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapPage() {
  return (
    <main>
      <h2 className="text-5xl font-bold text-center">Map of All National Parks </h2>
      <div className="flex justify-center pt-4">
        {/* <img src="/nationalparks_map.jpg" alt="Map" className="map-image" /> */}
        <MapContainer 
        center={[45, -100]} 
        zoom={4}
        maxBounds={[
            [5, -167],  
            [83, -50] 
          ]} 
        className="h-[70vh] w-full max-w-6xl rounded-lg">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {nationalParksData.map((park) => (
            <Marker
              key={park.name}
              position={[park.lat, park.lng]}
            >
              <Popup>
                <strong>{park.name}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

      </div>
        
      
    </main>

);}
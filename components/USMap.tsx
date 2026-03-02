"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// had to do some googling to fix the leaflet icons, stack overflowed said this was the fix, and it worked so here we are
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const nationalParksData = [
  { name: "Arches", lat: 38.68, lng: -109.57 },
  { name: "Badlands", lat: 43.75, lng: -102.5 },
  { name: "Biscayne", lat: 25.65, lng: -80.08 },
  { name: "Canyonlands", lat: 38.2, lng: -109.93 },
  { name: "Tonto Natural Bridge State Park", lat: 34.3348, lng: -111.4211 },
  { name: "Glacier", lat: 48.8, lng: -114 },
  { name: "Grand Canyon", lat: 36.06, lng: -112.14 },
  { name: "Grand Teton", lat: 43.73, lng: -110.8 },
  { name: "Rocky Mountain", lat: 40.4, lng: -105.58 },
  { name: "Saguaro", lat: 32.25, lng: -110.5 },
  { name: "Yellowstone", lat: 44.6, lng: -110.5 }];

export default function MapPage() {
  return (
    <MapContainer 
            center={[45, -100]} 
            zoom={4}
            maxBounds={[
                [25, -127],  
                [50, -66] 
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
    );}
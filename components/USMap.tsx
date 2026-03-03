"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

// had to do some googling to fix the leaflet icons, stack overflowed said this was the fix, and it worked so here we are
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const nationalParksData = [
  { name: "Arches", lnk: '/categories/selected_Cat/arches', lat: 38.68, lng: -109.57 },
  { name: "Badlands", lnk: '/categories/selected_Cat/badlands', lat: 43.75, lng: -102.5 },
  { name: "Biscayne", lnk: '/categories', lat: 25.65, lng: -80.08 },
  { name: "Canyonlands", lnk: '/categories/selected_Cat/canyonlands', lat: 38.2, lng: -109.93 },
  { name: "Tonto Natural Bridge State Park", lnk: '/categories/selected_Cat/tonto', lat: 34.3348, lng: -111.4211 },
  { name: "Glacier", lnk: '/categories/selected_Cat/glacier', lat: 48.8, lng: -114 },
  { name: "Grand Canyon", lnk: '/categories', lat: 36.06, lng: -112.14 },
  { name: "Grand Teton", lnk: '/categories/selected_Cat/teton', lat: 43.73, lng: -110.8 },
  { name: "Rocky Mountain", lnk: '/categories', lat: 40.4, lng: -105.58 },
  { name: "Saguaro", lnk:'/categories', lat: 32.25, lng: -110.5 },
  { name:"Yellowstone", lnk:'/categories/selected_Cat/yellowstone', lat :44.6, lng:-110.5 }];

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
                    <Link href={`${park.lnk}`} className="box">{park.name}</Link>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
    );}
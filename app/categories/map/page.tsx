'use client';
import dynamic from "next/dynamic";

const VisitedParksMap = dynamic(() => import("@/components/USMap"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <main>
      <h2 className="text-5xl font-bold text-center">Map of All National Parks Visited In 2025</h2>
      <div className="flex justify-center pt-4">
        <VisitedParksMap />
      </div>
        
    </main>

);}
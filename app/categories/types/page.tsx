import Link from "next/link";

export default function TypesPage() {
  return (
  <main>
    <h1 className="text-5xl font-bold text-center">Photo Types</h1>
    <h2 className="text-2xl font-bold text-center">Here you can find photos categorized by type</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div className="flex flex-col items-center"> 
        <h3 className="text-xl font-bold text-center">Type</h3>
         <Link href="/categories/selected_Cat/astrophotography" className="box">Astrophotography</Link>
         <Link href="/categories/selected_Cat/landscapes" className="box">Landscapes</Link>
         <Link href="/categories/selected_Cat/wildlife" className="box">Wildlife</Link>
         <Link href="/categories/selected_Cat/portraits" className="box">Portraits</Link>
      </div>
      <div className="flex flex-col items-center"> 
        <h3 className="text-xl font-bold text-center">Locations</h3>
         
         <Link href="/categories/selected_Cat/arches" className="box">Arches National Park</Link>
         <Link href="/categories/selected_Cat/badlands" className="box">Badlands National Park</Link>
         <Link href="/categories/selected_Cat/canyonlands" className="box">Canyonlands National Park</Link>
         <Link href="/categories/selected_Cat/tetons" className="box">Grand Tetons National Park</Link>
         <Link href="/categories/selected_Cat/glacier" className="box">Glacier National Park</Link>
         <Link href="/categories/selected_Cat/tonto" className="box">Tonto Natural Bridge State Park</Link>
         <Link href="/categories/selected_Cat/yellowstone" className="box">Yellowstone National Park</Link>
         
      </div>
    </div>
  </main>
);}
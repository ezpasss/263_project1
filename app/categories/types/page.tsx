export default function TypesPage() {
  return (
  <main>
    <h1 className="text-5xl font-bold text-center">Photo Types</h1>
    <h2 className="text-2xl font-bold text-center">Here you can find photos categorized by type</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div className="flex flex-col items-center"> 
        <h3 className="text-xl font-bold text-center">Type</h3>
        <div className="box">Astrophotography</div>
        <div className="box">Landscapes</div>
        <div className="box">Wildlife</div>
        <div className="box">Portraits</div>
      </div>
      <div className="flex flex-col items-center"> 
        <h3 className="text-xl font-bold text-center">Locations</h3>
        <div className="box">Tonto Natural Bridge State Park</div>
        <div className="box">Grand Canyon National Park</div>
        <div className="box">Yellowstone National Park</div>
        <div className="box">Arches National Park</div>
        <div className="box">Grand Tetons National Park</div>
        <div className="box">Glacier National Park</div>
        <div className="box">Badlands National Park</div>
      </div>
    </div>
  </main>
);}
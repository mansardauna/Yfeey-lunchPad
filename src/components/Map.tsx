// Simple, dependency-free map embed (OpenStreetMap)
// This avoids heavy map libraries and prevents React context/runtime issues.

// Victoria Island, Lagos coordinates
const lat = 6.4281;
const lon = 3.4219;

// Small bounding box around the marker
const delta = 0.01;
const bbox = `${lon - delta}%2C${lat - delta}%2C${lon + delta}%2C${lat + delta}`;

const Map = () => {
  return (
    <div className="w-full h-full min-h-[200px] rounded-xl overflow-hidden">
      <iframe
        title="Map showing YGCL Headquarters in Victoria Island, Lagos"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`}
      />
    </div>
  );
};

export default Map;


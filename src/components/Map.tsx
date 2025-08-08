import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/****
 * Map component
 * - Reads a token from localStorage key "MAPBOX_TOKEN".
 * - If absent, shows a simple input to paste the public token (stored locally only).
 * - Once provided, renders a beautiful globe map focused on venue coords.
 */
const DEFAULT_COORDS: [number, number] = [77.1945, 30.7333]; // Chandigarh (lon, lat)

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string | null>(
    typeof window !== 'undefined' ? localStorage.getItem('MAPBOX_TOKEN') : null
  );
  const [temp, setTemp] = useState<string>('');

  useEffect(() => {
    if (!token || !mapContainer.current) return;
    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 10,
      center: DEFAULT_COORDS,
      pitch: 45,
    });

    map.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });

    return () => map.current?.remove();
  }, [token]);

  if (!token) {
    return (
      <div className="border rounded-lg p-6 bg-card shadow-soft">
        <h3 className="font-medium">Add Mapbox Token</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Paste your Mapbox public token to preview the venue map locally. For production,
          add the token as a Supabase Edge Function secret.
        </p>
        <div className="mt-4 flex gap-2">
          <input
            className="flex-1 border rounded-md px-3 py-2 bg-background"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="pk.XXXX..."
          />
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => {
              localStorage.setItem('MAPBOX_TOKEN', temp);
              setToken(temp);
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return <div ref={mapContainer} className="h-[420px] w-full rounded-xl border bg-card shadow-soft" />;
};

export default Map;

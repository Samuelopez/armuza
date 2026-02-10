'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ShippingMap = ({ destCoords, destName }) => {
  // destCoords es [lon, lat], Leaflet usa [lat, lon]
  const dest = [destCoords[1], destCoords[0]];

  return (
    <div className="rounded-xl overflow-hidden border border-border/30 mt-3 mb-3" style={{ height: '200px' }}>
      <MapContainer
        center={dest}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={dest} icon={markerIcon}>
          <Popup>{destName}</Popup>
        </Marker>
      </MapContainer>
      <p className="text-xs text-subtle text-center mt-1">Verifica que el marcador esté en tu ubicación</p>
    </div>
  );
};

export default ShippingMap;

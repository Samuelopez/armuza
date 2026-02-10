'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icono destino (rojo)
const destIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Icono origen (custom color via filter)
const originIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [20, 33],
  iconAnchor: [10, 33],
  popupAnchor: [1, -28],
  shadowSize: [33, 33],
});

const ShippingMap = ({ originCoords, destCoords, destName }) => {
  // originCoords y destCoords son [lon, lat], Leaflet usa [lat, lon]
  const origin = [originCoords[1], originCoords[0]];
  const dest = [destCoords[1], destCoords[0]];

  // Calcular centro y zoom
  const centerLat = (origin[0] + dest[0]) / 2;
  const centerLon = (origin[1] + dest[1]) / 2;

  return (
    <div className="rounded-xl overflow-hidden border border-border/30 mt-3 mb-3" style={{ height: '180px' }}>
      <MapContainer
        center={[centerLat, centerLon]}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        dragging={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={origin} icon={originIcon}>
          <Popup>ARMUZA - San Mateo Atenco</Popup>
        </Marker>
        <Marker position={dest} icon={destIcon}>
          <Popup>{destName}</Popup>
        </Marker>
        <Polyline
          positions={[origin, dest]}
          pathOptions={{ color: '#854937', weight: 2, dashArray: '8, 8' }}
        />
      </MapContainer>
    </div>
  );
};

export default ShippingMap;

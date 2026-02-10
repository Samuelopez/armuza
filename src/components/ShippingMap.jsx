'use client';

import { useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
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

const DraggableMarker = ({ position, onDragEnd }) => {
  const markerRef = useRef(null);

  const eventHandlers = useMemo(() => ({
    dragend() {
      const marker = markerRef.current;
      if (marker) {
        const { lat, lng } = marker.getLatLng();
        onDragEnd([lng, lat]); // Devolver en formato [lon, lat] para ORS
      }
    },
  }), [onDragEnd]);

  return (
    <Marker
      position={position}
      icon={markerIcon}
      draggable
      ref={markerRef}
      eventHandlers={eventHandlers}
    />
  );
};

const ShippingMap = ({ destCoords, onCoordsChange }) => {
  // destCoords es [lon, lat], Leaflet usa [lat, lon]
  const dest = [destCoords[1], destCoords[0]];

  return (
    <div className="mt-3 mb-3">
      <div className="rounded-xl overflow-hidden border border-border/30" style={{ height: '200px' }}>
        <MapContainer
          center={dest}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <DraggableMarker position={dest} onDragEnd={onCoordsChange} />
        </MapContainer>
      </div>
      <p className="text-xs text-subtle text-center mt-1.5">
        Arrastra el marcador para ajustar tu ubicación exacta
      </p>
    </div>
  );
};

export default ShippingMap;

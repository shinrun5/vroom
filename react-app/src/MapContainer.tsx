import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import "./MapContainer.css";

const MapContainer: React.FC = () => {
  const center = { lat: 40.7128, lng: -74.0060 }; // NYC

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string}>
      <div className="map-container">
        <Map
          mapId="e0e2e7d626eca8e31276497f"
          defaultCenter={center}
          defaultZoom={12}
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          <AdvancedMarker position={center} title="New York City" />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapContainer;

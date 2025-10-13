import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import "./MapContainer.css"; 

const MapContainer: React.FC = () => {
  const center = { lat: 40.7128, lng: -74.0060 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string}>
      <div className="map-container">
        <Map
          defaultCenter={center}
          defaultZoom={14}
          gestureHandling={"greedy"}
          disableDefaultUI={false}
        >
          <Marker position={center} title="My Starting Point" />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapContainer;

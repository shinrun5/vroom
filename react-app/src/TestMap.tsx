import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const TestMap: React.FC = () => {
  const center = { lat: 40.7128, lng: -74.0060 }; // NYC

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string}>
      <div
        id="map-container"
        style={{
          width: "100vw",
          height: "100vh",
          border: "2px solid red",
        }}
      >
        <Map
          defaultCenter={center}
          defaultZoom={10}
          gestureHandling="greedy"
          disableDefaultUI={false}
        />
      </div>
    </APIProvider>
  );
};

export default TestMap;

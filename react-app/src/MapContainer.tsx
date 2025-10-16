import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap
} from "@vis.gl/react-google-maps";
import "./MapContainer.css";

const Directions: React.FC = () => {
  const map = useMap(); 
  const start = { lat: 40.32869, lng: -74.56126 }; // Home
  const end = { lat: 40.32589, lng: -74.46965 };   // Work

  useEffect(() => {
    if (!map) return; 

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(start);
    bounds.extend(end);
    map.fitBounds(bounds);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: "#4285F4",
        strokeOpacity: 0.9,
        strokeWeight: 5,
      },
    });

    directionsService
      .route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((error) => {
        console.error("Directions request failed:", error);
      });
  }, [map]);

  return null;
};

const MapContainer: React.FC = () => {
  const start = { lat: 40.32869, lng: -74.56126 };
  const end = { lat: 40.32589, lng: -74.46965 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string}>
      <div className="map-container">
        <Map
          mapId="e0e2e7d626eca8e31276497f"
          defaultCenter={start}
          defaultZoom={12}
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          <AdvancedMarker position={start} title="Home" />
          <AdvancedMarker position={end} title="Work" />
          <Directions /> {}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapContainer;


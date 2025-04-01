import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 20.5937, 
  lng: 78.9629, 
};

function MapComponent({ address }) {
  const [position, setPosition] = useState(defaultCenter);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`);
        const data = await response.json();
        if (data.results.length > 0) {
          setPosition(data.results[0].geometry.location);
        } else {
          setError('Location not found');
        }
      } catch {
        setError('Failed to fetch location');
      }
    };
    fetchCoords();
  }, [address]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCgNylr1hX-3K4fRcEq2zZ0TrOVGR1AQV4">
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={10}>
        <Marker position={position} />
      </GoogleMap>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </LoadScript>
  );
}

export default MapComponent;

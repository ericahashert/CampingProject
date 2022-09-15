import React, { useState } from 'react'
import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '95vh',
  width: '80%',
};

const settings = {
    disableDefaultUI: true,
}

const center = {
    lat: 39.732361431022305,
    lng: -104.98573819203389,
}

function ParkMap ( {parks}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey: "AIzaSyB_-pnaEjQj3ggKId0WzjZmACXRGdAX0Y4"
  })

  const [map, setMap] = React.useState(null)
  const newParkData = parks;

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div id="mapContainer">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        settings={settings}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {newParkData.map(park => {
            <Marker 
                id="marker"
                key={park.id}
                position={{lat: (park.latitude), lng: (park.longitude)}}
            />
        })
        
        }
        <></>
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(ParkMap);
import React, { useState } from 'react'
// import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
import ParkForm from "./ParkForm"

export default function ParkMap ({ parks }) {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-maps-script',
  //   googleMapsApiKey: "AIzaSyB_-pnaEjQj3ggKId0WzjZmACXRGdAX0Y4"
  // })

  // const [map, setMap] = useState(null)
  // const newParkData = parks;
  const [selected, setSelected] = useState([])
  const containerStyle = {
    height: '95vh',
    width: '80%',
    left: "300px",
  };
  
  const settings = {
      disableDefaultUI: true,
      zoomControls: true,
  }
  
  const center = {
      lat: 36.43628129888464,
      lng: -99.40965895946415,
  }

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return (
    <div id="mapContainer">
      <LoadScript id ="map" googleMapsApiKey="AIzaSyB_-pnaEjQj3ggKId0WzjZmACXRGdAX0Y4">
        <ParkForm />
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={4.5}
          center={center}
          options={settings}
        >
          {parks.map((marker)=> (
            <Marker 
                id="marker"
                key={marker.id} 
                position={{lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude)}}
                icon={{
                  url: marker.images[0].url,
                  scaledSize: new window.google.maps.Size(30,30),
                  origin: new window.google.maps.Point(0,0),
                  anchor: new window.google.maps.Point(15,15),
                }}
                onClick={()=>{
                    setSelected(marker);
                }}
            />
        ))}

        {selected ? (
        <InfoWindow position={{ lat: parseFloat(selected.latitude), lng: parseFloat(selected.longitude)}} onCloseClick={()=>{setSelected(null)}} >
            <div>
                <h2>{selected.fullName}</h2>
                <h3>{selected.designation}</h3>
                <p>{selected.description}</p>
            </div>
        </InfoWindow>
        ) : null}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

{/* <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        settings={settings}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {newParkData.map(park => {
            <Marker 
                id="marker"
                key={park.id}
                position={{lat: park.latitude, lng: park.longitude}}
            />
        })
        
        }
        <></>
      </GoogleMap> */}
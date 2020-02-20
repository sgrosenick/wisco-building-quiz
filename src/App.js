import React from 'react';
import { Map, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import logo from './logo.svg';
import * as uwBuildings from "./data/UW_Mad_Buildings.json";
import './App.css';

function App() {
  return (
    <Map center={[43.073051, -89.401230]} zoom={16}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {uwBuildings.features.map( building => (
        <Polygon key={building.properties.BUILDINGFO} positions={building.geometry.coordinates} color="pink" stroke={2}/>
      ))}
      <Marker key="Marker" position={[43.073, -89.401]}></Marker>

    </Map>
  );
}

export default App;
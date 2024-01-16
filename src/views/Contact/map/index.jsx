// XaritaKomponent.js
import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const XaritaKomponent = ({ center, zoom }) => {
  return (
    <Map center={center} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default XaritaKomponent;

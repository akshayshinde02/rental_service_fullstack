import React, { useState,useEffect, useRef } from 'react';
import { Search,GpsFixed } from '@mui/icons-material';

const apiKey ="AIzaSyC_zL8xcuCOsRZB078tAVzX1MYSeTQPsWg";
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

// load google map api js

function loadAsyncScript(src) {
    return new Promise(resolve => {
      const script = document.createElement("script");
      Object.assign(script, {
        type: "text/javascript",
        async: true,
        src
      })
      script.addEventListener("load", () => resolve(script));
      document.head.appendChild(script);
    })
  }

const Demo = () => {

    const searchInput = useRef(null);
    const [address, setAddress] = useState({});
  

     // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if(window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  }

   // init autocomplete
   const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    autocomplete.setFields(["address_component", "geometry"]);
    // autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

  }

    // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete())
  }, []);

  return (
    <div className="App">
    <div>
      <div className="search">
        <span ><Search /></span>
        <input  ref={searchInput}  type="text" placeholder="Search location...."/>
        <button ><GpsFixed /></button>
      </div>
{/* 
      <div className="address">
        <p>City: <span>{address.city}</span></p>
        <p>State: <span>{address.state}</span></p>
        <p>Zip: <span>{address.zip}</span></p>
        <p>Country: <span>{address.country}</span></p>
      </div> */}

    </div>
  </div>
      
  );
};

export default Demo;

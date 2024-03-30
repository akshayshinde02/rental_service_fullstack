import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import axios from 'axios';
import './TruckService.css';
import logo from './rental.jpg'
import Items from './Items';
import Navbar from './Navbar';
import RentalGoogleMap from './RentalGoogleMap';
import Zoom from "react-reveal/Zoom"
import ProgressBar from './ProgressBar';



const DropUpTime = () => {

       
  return (
      <>
      {/* <Navbar/>
      
      <ProgressBar/> */}
      <div className='listContainer'>
        <div className='listWrapper' >

       

          <div className='ListResult' >
            <Zoom  duration={1500}>
            <Items />
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items />
            <Items/>
            </Zoom>
          </div>

          <div className='listSearch' >
            {/* <h1 className='IsTitle'>Google Map</h1> */}
            <RentalGoogleMap/>
            </div>
        </div>
      </div>
            
      </>
  );

}

export default DropUpTime
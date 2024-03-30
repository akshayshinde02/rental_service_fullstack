import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import './TruckService.css';
import logo from './rental.jpg'
import Items from './Items';
import Navbar from './Navbar';
import RentalGoogleMap from './RentalGoogleMap';
import Zoom from "react-reveal/Zoom"
import ProgressBar from './ProgressBar';
import MuiStepper from '../steper/MuiStepper'
import { OrderState } from '../Context';



const TruckServices = () => {

  const [astepper,setasteper] = useState(-0);
  // const { category, setCategory, subCategory, setSubCategory, age, setage, vendors, setVendors, mainrental } = OrderState();
  const { category, subCategory, vendors, setVendors,mainrental, modelType,  rentalprice, rentalquantity} = OrderState();
  // console.log(category, " ", subCategory, " ",mainrental+" "+modelType+" "+rentalprice+" "+rentalquantity)
  // // console.log(category, " ", subCategory, " ", age)
  // console.log(vendors)
  console.log(mainrental)

  // useEffect(() => {
  //   // document.body.style.overflowY = "hidden";
  //   return () => {
  //     // document.body.style.overflowY = "scroll";
  //     setasteper(astepper+1);
  //   };
  // }, []);

  // console.log(astepper)

       
  return (
      <>
      <MuiStepper isPositionFixed={true} astepper={astepper}/>
      <div className='listContainer'>
          {/* <div className='texty'>
            Choose the rental Service Location and Time
          </div> */}
        <div className='listWrapper' >

        <div className='listSearch' >
            {/* <h1 className='IsTitle'>Google Map</h1> */}
            {/* <RentalGoogleMap/> */}
            </div>


          <div className='ListResult' >
            {/* <Zoom  duration={1500}> */}
            {/* <h1>Akshay</h1> */}
            <Items mainrental={mainrental}/>
            {/* <Items/>
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
            <Items/> */}
            {/* </Zoom> */}
          </div>

         
        </div>
      </div>
            
      </>
  );

}

export default TruckServices
import React from 'react'
import './Style/trailer.css'
import InputLabel from '@mui/material/InputLabel';
import { FaTrailer } from "react-icons/fa6";
import { RiTruckLine } from "react-icons/ri";
import {  Button, FormControl } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const Trailer = () => {
    const [trailer, setTrailer] = React.useState('');

    const handleChangeTrailer = (event) => {
      setTrailer(event.target.value);
    };

    const [truck, setTruck] = React.useState('');

    const handleChangeTruck = (event) => {
      setTruck(event.target.value);
    };

    const handleClose = () => {
      // onClose();
      let c1 = localStorage.getItem('count3');
      console.log(c1)
  
      let updateCount = parseInt(c1)+1;
      localStorage.setItem('count3',updateCount);
      console.log("PickUp",c1);
      window.close();
  
      
    };

  return (
<div className="trailer-main">
 <div className="trailerpage">
    <div className="trailerpage-1">
        <div className="badge">
           
            All rates include up to 5 days of use and 1199 miles.
        </div>
        <h2 className='H2' >Select Equipment</h2>
        <div className="trailersfilter">
            <h3 className='H3-trucktrailer'>Trailers</h3>
            <FormControl>

            <InputLabel id="demo-simple-select-label"><FaTrailer/></InputLabel>
          <Select
          id="demo-simple-select-label"
          value={trailer}
          label="Trailer"
          onChange={handleChangeTrailer}
          sx={{width:'200px', height:'43px'}}
          placeholder='4 x 8 Cargo Trailer $686.00'
          >
            <MenuItem value='4x8 Cargo Trailer'>4' x 8' Cargo Trailer $686.00</MenuItem>
          <MenuItem value='5x8 Cargo Trailer'>5'x8' Cargo Trailer $910.00</MenuItem>
          <MenuItem value='5x9 Utility Trailer with Ramp'>5'x9' Utility Trailer with Ramp $910.00</MenuItem>
          <MenuItem value='evening'>6'x12' Cargo Trailer $1,596.00</MenuItem>
            </Select>  
            </FormControl>
        </div>


        <div className="trucksfilter">
            <h3 className='H3-trucktrailer'>Trucks</h3>
            <FormControl>
            <InputLabel id="demo-simple-select-label"><RiTruckLine/></InputLabel>
          <Select
          id="demo-simple-select-1"
          value={truck}
          label="Trucks"
          onChange={handleChangeTruck}
          sx={{width:'200px', height:'43px'}}
          
          >
            <MenuItem value='10truck'>10' Truck $2,582.00</MenuItem>
          
            </Select>  
            </FormControl>
        </div>

      <div className="trailerimg">
        <img src="https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/04/uhaul-trailer.jpg?fit=341%2C227&ssl=1" alt="4' x 8' Cargo Trailer"
        style={{ aspectRatio: "300/200",
        objectFit: "cover",
        }}
        height='200'
        width='300' />
        <div>
            <h4 className='H4'>4' x 8' Cargo Trailer</h4>
            <ul className="Ul">
                <li>Inside dimensions: 8'1" x 4'1" x 4' (LxWxH)</li>
                <li>Door opening: 3'1" x 3'5" (WxH)</li>
              </ul>
        </div>
      </div>
    </div>
  {/*next  */}
    <div className="truckpage-1">
        <div className="truckpage-2">
            <div className="truckimg">
                <img 

                height='200'
                
                src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/carouselimageswithouttext/vehicles/pickup-trucks/OQAR_22_ThreeFourths%20Ton%20Pickup_AngularFront_US-ENG.png" alt="10' Truck" 
                style={{
                    aspectRatio:"300/200",
                    objectFit:'cover',
                }}
                width='300'
                />

                <div>

            <h4 className='H4'>10' Truck</h4>
            <ul className="Ul">
                  <li>Studio to 1 Bedroom Apt.</li>
                  <li>Inside dimensions: 9'11" x 6'4" x 6'2" (LxWxH)</li>
                  <li>Door opening: 5'11" x 5'7" (WxH)</li>
                  <li>Deck height: 2'5" Length: 9'11"</li>
                </ul>
                </div>
             </div>
            </div>
    <div className="summery">
      <div className="Ul-submit-1">
        <span >10' Truck</span>
        <span >$2582.00</span>        
      </div>

      <div className="Ul-submit-1">
        <span>4' x 8' Cargo Trailer</span>
        <span>$686.00</span>       
      </div>
      <hr/>
      <div className="Ul-submit-1">
        <span>Subtotal:</span>
        <span>$3268.00</span>       
      </div>

      <div className="trailerbutton">

      <Button variant="contained"
      sx={{width:'120px'}} onClick={handleClose}
      >
        Continue
      </Button>
    </div>
  </div>

    
 </div>
</div>
</div>
  )
}

export default Trailer
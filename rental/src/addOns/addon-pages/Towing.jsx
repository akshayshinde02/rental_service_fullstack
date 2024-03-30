import { Button, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import './Style/towing.css'
import { RiTruckLine } from 'react-icons/ri'

const Towing = () => {
    const [year, setYear] = React.useState('');

    const handleChangeYear = (event) => {
      setYear(event.target.value);
    };
    const [company, setCompany] = React.useState('');

    const handleChangeCompany = (event) => {
      setCompany(event.target.value);
    };
    const [model, setModel] = React.useState('');

    const handleChangeModel = (event) => {
      setModel(event.target.value);
    };

    const handleClose = () => {
      // onClose();
      let c = localStorage.getItem('count2');
      console.log(c)
  
      let updateCount = parseInt(c)+1;
      localStorage.setItem('count2',updateCount);
      console.log("PickUp",c);
      window.close();
      
      
    };
  

  return (
 <div className="towing-main">
         <h1>Towing Equipment</h1>
         <p >Interested in towing your vehicle? Enter information below to see available options.</p>
         <div className="towingfilter">
            
         <FormControl>
            <InputLabel  id="demo-simple-select-label">Year</InputLabel>
          <Select
          id="demo-simple-select-label"
          value={year}
          label="Trucks"
          onChange={handleChangeYear}
          sx={{width:'auto', height:'47px'}}
          
          >
         <MenuItem value='2024'>2024</MenuItem>
         <MenuItem value='2023'>2023</MenuItem>
         <MenuItem value='2022'>2022</MenuItem>
         <MenuItem value='2021'>2021</MenuItem>
         <MenuItem value='2020'>2020</MenuItem>
          
            </Select>  
            </FormControl>
      

         <FormControl>
            <InputLabel id="demo-simple-select-label">Company</InputLabel>
          <Select
          id="demo-simple-select-1"
          value={company}
          label="Trucks"
          onChange={handleChangeCompany}
          sx={{width:'auto', height:'47px'}}
          
          >
         <MenuItem value='2024'>Audi</MenuItem>
         <MenuItem value='2023'>Bentlei</MenuItem>
         <MenuItem value='2022'>Aston Martin</MenuItem>
         <MenuItem value='2021'>Toyota</MenuItem>
         <MenuItem value='2020'>GMC</MenuItem>
          
            </Select>  
            </FormControl>
      

         <FormControl>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
          id="demo-simple-select-1"
          value={model}
          label="Trucks"
          onChange={handleChangeModel}
          sx={{width:'auto', height:'47px', }}
          
          >
         <MenuItem value='2024'>A4 ALLROAD PREM PLUS 45 TFSI </MenuItem>
        
          
            </Select>  
            </FormControl>
        </div>
        <p> NOTE: Read your motor vehicle owner's manual to determine proper towing procedure and compatibility. Optional
        towing insurance can be added at checkout.</p>
        {/*Card-1 */}
    <div className="towing-page">
      <div className="towing-img">
      <img
            alt="Tow Dolly"
            className="h-12"
            height="60"
            src="https://rm.gopenske.com/ptr/assets/consumer/app/static/svg/trucks/tow-dolly.svg"
            style={{
              aspectRatio: "200/80",
              objectFit: "cover",
            }}
           
          />
      </div>
      <div className='tow-dolly'>
            <h2 className="font-semibold">Tow Dolly</h2>
            <p className="text-sm">Recommended for front-wheel drive vehicles. </p>
            <Button className="text-sm" variant="ghost">
              Hide Details
            </Button>
       </div>
       <div className='tow-dolly-price'>
          <span className='center'>$101.00</span>
          <div className="towing-button">
            <div className='butn12'>
          <Button  variant='contained' className='butn12' sx={{fontSize:'0.8rem'}} onClick={handleClose} >Equip</Button>
          </div>
          </div>
        </div>
     </div>

        {/*Card-2 */}
    <div className="towing-page">
      <div className="towing-img">
      <img
            alt="Car Carrier"
            className="h-12"
            height="60"
            src="https://rm.gopenske.com/ptr/assets/consumer/app/static/svg/trucks/car-carrier.svg"
            style={{
              aspectRatio: "200/80",
              objectFit: "cover",
            }}
           
          />
      </div>
      <div className='tow-dolly'>
            <h2 className="font-semibold">Car Carrier</h2>
            <p className="text-sm">Recommended for all & rear-wheel drive vehicles</p>
            <Button className="text-sm" variant="ghost">
              View Details
            </Button>
       </div>
       <div className='tow-dolly-price'>
          <span >$201.00</span>
          <div className="towing-button">

          <div className='butn12'>
          <Button  variant='contained' sx={{fontSize:'0.8rem'}} onClick={handleClose} >Equip</Button>
          </div>
          </div>
        </div>
     </div>
 </div>
  )
}

export default Towing
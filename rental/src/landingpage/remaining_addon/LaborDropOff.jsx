import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Page-Styles/laborpickup.css'
import { TbBrandDaysCounter } from "react-icons/tb";
import { TbSortAscendingNumbers } from "react-icons/tb";
import PickUpList from './PickUp_list';
import { Ri24HoursLine } from "react-icons/ri";
import { Button, } from '@mui/material';

const LaborDropOff = () => {
    
    const [day, setDay] = React.useState('');

    const handleChangeDay = (event) => {
      setDay(event.target.value);
    };
    const [crew, setCrew] = React.useState('');

    const handleChangeCrew = (event) => {
      setCrew(event.target.value);
    };
    const [hours, setHours] = React.useState('');

    const handleChangeHours = (event) => {
      setHours(event.target.value);
    };
    
  return (
    <>
    <Box >
      <div className="filter-page">
      <div className="pickupfilter">
    <h2>Filter:</h2>
    <div className="filtermain">
     {/*Filter buttons */}       
    
     <div className='filter-types'>
        <h4>Time of Day</h4>
        
      <FormControl sx={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label"><TbBrandDaysCounter /></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Age"
          onChange={handleChangeDay}
        >
          <MenuItem value='morning'>Morning</MenuItem>
          <MenuItem value='afternoon'>Afternoon</MenuItem>
          <MenuItem value='evening'>Evening</MenuItem>
        </Select>
      </FormControl>
     </div>

     <div className='filter-types'>
        <h4>Number of Crew</h4>
        
      <FormControl sx={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label"><TbSortAscendingNumbers /></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crew}
          label="number"
          onChange={handleChangeCrew}
          placeholder='2 Helpers'
        >
          <MenuItem value={1}>1 Helper</MenuItem>
          <MenuItem value={2}>2 Helper</MenuItem>
          <MenuItem value={3}>3 Helper</MenuItem>
          
        </Select>
      </FormControl>
     </div>


     <div className='filter-types'>
        <h4>Number of Hours</h4>
        
      <FormControl sx={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label"><Ri24HoursLine /></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hours}
          label="Age"
          onChange={handleChangeHours}
          placeholder='4 Hours'
        >
          <MenuItem value={2}>2 Hours</MenuItem>
          <MenuItem value={4}>4 Hours</MenuItem>
          <MenuItem value={6}>6 Hours</MenuItem>
          
        </Select>
      </FormControl>
     </div>

    <div className="filter-button">

    <Button variant="contained" 
    color='info'
    sx={{display:"flex"
      
  }}  
    >Apply Filters</Button>
    </div>
    </div>
</div>


{/*Filter List */}

<PickUpList 
crew={setCrew} 
hours={setHours} 
/>
<PickUpList/>

  </div>
    </Box>



  
    

</>
  )
}

export default LaborDropOff
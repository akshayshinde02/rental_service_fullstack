import React, { useState , useEffect} from 'react'
import './home.css'
import { Button, FormControl,  MenuItem, Select, Typography } from '@mui/material'
import RentalDate from './RentalDate';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import { OrderState } from '../Context';
import axios from 'axios';

 

const Home = () => {
  // const [category, setCategory] = useState('');
  // const [subCategory, setSubCategory] = useState('');
  // const [age, setage] = React.useState('');
  const {category,setCategory,subCategory,setSubCategory,age,setage, 
    setrentalplace,
    setrentaltime,
    setretnaldate
  } = OrderState();
// Options for the first dropdown

const categories = [ 'Trucks'];

// Options for the second dropdown based on the selected category
const subCategories = {
  'Cars': ['Small', 'Medium', 'Large','SUV',"Van",'Luxury-Cars','Convertibles'],
  'Trucks': ['Pickup Trucks','Cargo Vans','Box Trucks','Stakebed Trucks','Flatbed Trucks','Refrigerated Trucks'],
  
};

// Handle changes in the first dropdown
const handleCategoryChange = (event) => {
  const selectedCategory = event.target.value;
  setCategory(selectedCategory);
  // Reset the second dropdown when the first dropdown changes
  // setSubCategory('');
};



    const handleChangeAge = (event) => {
      setage(event.target.value);
    };
    
//     const {vendors,setVendors} = OrderState();
// useEffect(()=>{
//   fetchVendors();
// },[]);

// // const[vendors, setVendors] = useState([]);

// const fetchVendors = async ()=>{
//   try{
//     const response = await axios.get("http://localhost:4000/api/user/vendors");
//     // const orders = response.data;
//     // const ordersJSON = JSON.stringify(orders, null, 2);
//     // console.log(ordersJSON)
//     await setVendors(response.data);
    
//     // console.log(vendors)
//   }catch(error){
//     console.log(error);
//   }
// };

   
  return (
    <div className="home-main">
        <h2>Moving & Rental</h2>
        <div className='same-location'>
                
                <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
        
                    id="return-location"
                ></button>
                <input
                 aria-hidden="true"
                 tabindex="-1"
                 type="checkbox"
                 value="on"

                />
                <label className='home-label'>
                    Return to same Location
                </label>
            </div>
        <div className="home-1">
          
        <TextField fullWidth id="outlined-basic" 
        label='From'
        placeholder='Enter City or Zip Code' variant="outlined" />
         
        <RentalDate/>

        <TextField fullWidth id="outlined-basic"
        label='To'
        placeholder='Enter City or Zip Code'   variant="outlined" />

        <FormControl sx={{width:'18rem'}}>
            <Typography fontSize={'0.8rem'}fontWeight={450}>Renter's Age</Typography>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChangeAge}
          placeholder='Age'
          sx={{height:'50px'}}
        >
          <MenuItem value={25}>25+</MenuItem>
          <MenuItem value={21-24}>21-24</MenuItem>
          <MenuItem value={18-20}>18-20</MenuItem>
        </Select>
      </FormControl>


        <FormControl sx={{width:'auto'}}>
            <Typography fontSize={'0.8rem'}fontWeight={450}>Vehicle Type</Typography>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleCategoryChange}
          placeholder='Age'
          sx={{height:'50px'}}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
          
        </Select>
      </FormControl>
       {/* Second Dropdown */}
        <FormControl sx={{width:'auto'}}>
            <Typography fontSize={'0.8rem'} fontWeight={450}>Models</Typography>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subCategory}
          label="Age"
          onChange={(e)=>setSubCategory(e.target.value)}
          placeholder='Age'
          sx={{height:'50px'}}
        >
          {subCategories[category]?.map((subCat) => (
            <MenuItem key={subCat} value={subCat}>
              {subCat}
            </MenuItem>
          ))}
          
        </Select>
      </FormControl>

        </div>
        <div className="home_button">
        <Link to='/rendar'>
          <Button variant='contained' >Continue</Button>
          </Link>
        </div>
       
    </div>
  )
}

export default Home
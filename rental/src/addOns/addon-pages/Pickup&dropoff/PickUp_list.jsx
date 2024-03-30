import React,{useState} from 'react'
import { FaRegStar } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import '../Style/pickuplist.css'
import { FaClock } from "react-icons/fa6";
import { Button, } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import MainAddOn from '../../../rentalreview/MainAddOn';
const PickUpList = ({setCrew,setHours}) => {
  const[value]= React.useState(3);

  const navigate = useNavigate();
  // const [showModal, setShowModal] = useState(false);

  // const closeModal = () => setShowModal(false);

  const handleClose = () => {
    // onClose();
    let count = localStorage.getItem('count');
    console.log(count)

    let updateCount = parseInt(count)+1;
    localStorage.setItem('count',updateCount);
    console.log("PickUp",count);
    window.close();
    
  };



  return (

    <div className="Listcontainer">
    <img
      src="https://cloud.hireahelper.com/helpers/workerimages/926237e7415a4626a7f0e034f590d1ec.jpeg"
      alt=""
      className="img-labor"
    />
    <div className="crewdetails">
      <h1 className="siTitle">Angel's Moving Crew</h1>
      <div className="PickupRating">
        <Rating name='read-only' value={value} readOnly /><p>3.0</p>
      </div>
    
      <span className="PickupAvailable">
        <span><FaClock /></span> Available to work: 7AM - 6PM</span>
      
    </div>
    <div className="PickupDetails">
     
      <div className="siDetailTexts">
        <span className="siPrice">$392.00</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        {<span>
          2 movers for 2 hours
  </span>}
       
       <Button variant="contained" 
    color='info'
   
  className='btns12'
  onClick={handleClose} 
  >
        Select
       </Button>
       {/* {showModal && <MainAddOn closeModal={closeModal} />} */}
        
      </div>
    </div>
   
  </div>
  )
}

export default PickUpList
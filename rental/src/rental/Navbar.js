import React from 'react'
import './navbar.css'
import RentalDates from './RentalDates'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquarePhone, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    //   <div className='navbar'>
    //     <div className='subnavbar'>
    //       <div className='demo'>
    //     <FontAwesomeIcon className='iconns' icon = {faSquarePhone}/> 
    //     <span className='title1'>SpeenuZ</span><br/>
    //     </div>
    //     <span className='subtitles'>Always Find New for you </span>
    // </div>
    //     {/* <div className='container2'>
    //       <div className='btn'>
    //     <RentalDates/>
    //     <button className='sbtn'>
    //       <FontAwesomeIcon icon={faMagnifyingGlass} />
    //       </button>
    //     </div>
    //     </div> */}

    //    {/* <i class="fa-regular fa-circle-user"></i> */}
    //      <div className='loginRegister'>
    //       <button className='register'> <FontAwesomeIcon icon = {faCircleUser}/> Register</button>
    //     </div>
       
    // </div>
   // Navbar.js


        <nav className="navbar">
            <div className="containerss">
                {/* Logo and Company Name */}
                <div className="logo">
                    <img src={logo} alt="Company Logo" className="logo-img" />
                    <span className="company-name">SpeenuZ</span>
                </div>
                {/* Description */}
                {/* <p className="descriptionss">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet libero non magna mollis, a eleifend ligula iaculis.</p> */}
                {/* Sign-in Button */}
                <button className="signin-btn">Sign In</button>
            </div>
        </nav>
  
  )
}

export default Navbar
import { React, useState,useEffect } from 'react'
import './addonmodel.css'
import Review from '../reviews/Review'
import EndPage from '../endpage/EndPage'
import MainAddOn from './MainAddOn'
import MuiStepper from '../steper/MuiStepper'
import logo1 from '../user/truck.jpg'
import logo2 from '../user/truck.jpg'
import logo3 from '../user/truck.jpg'
import logo4 from '../user/truck1jpg.jpg'
// import logo1 from '../user/bucket.png'
import styled from '@emotion/styled'
import { OrderState } from '../Context';

const AddOnModel = () => {

    // Image Array
    const images = [logo1, logo4, logo3, logo4];
    const [mainImage, setMainImage] = useState(images[0])

    const [name, setName] = useState("");

    const [isVissible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const toggleVisibility = () => {
        setIsVisible((preVisible) => !preVisible);
    }

    const [astepper,setasteper] = useState(1);

    // useEffect(() => {
    //     // document.body.style.overflowY = "hidden";
    //     return () => {
    //       // document.body.style.overflowY = "scroll";
    //       setasteper(astepper+2);
    //     };
    //   }, []);

    
  const { category, subCategory, vendors, setVendors,mainrental, modelType,  rentalprice, rentalquantity,subservicename} = OrderState();
  console.log(category, " ", subCategory, " ",mainrental+" "+modelType+" "+rentalprice+" "+rentalquantity+" "+subservicename)
  // console.log(category, " ", subCategory, " ", age)
    // console.log()

    return (
        <>
            <div className='progresscenter'>
                {/* <ProgressBar /> */}
                <MuiStepper isPositionFixed={true} astepper={astepper}/>
            </div>
            <div>
            {vendors.map((data, index) => {
              if (category === data.services[0].serviceType && subCategory === data.services[0].rentalvehical &&
                 mainrental === data.name && modelType === data.services[0].modelType
                ) {
              return(
            <div className='maincontainer1' key={index}>

                <div className='container78 responsivecon'>
                    <div className='center'>
                        <span className='titley1 servicetitle'>{data.services[0].modelType}</span><br />


                        <div className='truckimage1'>
                            <div className='img1'>
                                {
                                    data.services[0].images.slice(0, 4).map((image, i) => (
                                        <img
                                            src={image}
                                            className='truckimgs'
                                            key={i}
                                            alt={`Truck ${i + 1}`}
                                            onClick={() => setMainImage(image)}
                                        />
                                    ))

                                    
                                }
                            </div>
                            <div className='img2'>
                                <img src={mainImage} className='truckimg2' />
                            </div>
                        </div>
                    </div>

                <div className='rentalservicename center'>{data.services[0].subservicename}</div><br />
                    <div className='descriptions'>

                        <h2 className='center'>Descriptions</h2><br/>
                        <h4 className='ullist'>{data.services[0].modelType} Features</h4>
                        <ul className='ullist'>
                       <li> {data.services[0].description}</li>
                            {/* <li>Up to 4,000 lbs payload*</li>
                            <li>3-6 person seating - Extended or Crew Cabs</li>
                            <li>2-wheel and 4-wheel drive available</li>
                            <li> 6'-8' truck beds available</li>
                            <li> Towing capable - trucks have receiver hitch for easy towing</li>
                            <li> Great for recreation, local moves and projects</li><br></br>
                            <h4> Standard Features</h4>

                            <li> Air Conditioning</li>
                            <li> Automatic Transmission</li>
                            <li>  AM/FM Radio</li> */}
                        </ul>
                    </div>

                </div>

                <div className='maindiv2'>

                    <div className='cont1'>

                        <div className='flexybox'>
                            <div className='pickupbox'>
                                <span className='titley1  bold'>Pick Up</span><br />
                                <span className='pickupaddress space'>4646 California</span> <br />
                                <span className='pickupdate'>Sun, 9:20AM Sept 24</span> <br />
                                {/* <button className='colors'>
                                Edit
                            </button> */}

                            </div>
                            
                            <div className='dropupbox'>
                                <span className='titley1 bold'>Drop Up</span><br />
                                <span className='dropupaddress space'>2001 Los Angels</span> <br />
                                <span className='pickupdate'>Tues, 9:20AM Sept 30</span> <br />
                                {/* <button className='colors'>
                                Edit
                            </button> */}
                            </div>
                        </div><br />
                    </div>
                    <div className='centerreview'>
                    <Review />
                    </div>

                    <button className="buttonss btn11" onClick={() => setShowModal(true)}>
                        Continue
                    </button>
                    {showModal && <MainAddOn closeModal={closeModal} />}
                </div>
            </div>
              );
              }else{
                return null;
              }
            })}
            </div>
        </>
    )
}

export default AddOnModel
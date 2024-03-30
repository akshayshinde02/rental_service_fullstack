import React, { useEffect, useState } from 'react'
import Shortby from './common/Shortby/ShortBy'
import { Link } from 'react-router-dom'
import './remaining_addon/trucktype1.css'
import SideBar from './SideBar/SideBar';
import { Button } from '@mui/material';
// import second from 'first'
import { useNavigate } from 'react-router-dom'
import MuiStepper from '../steper/MuiStepper';
import { OrderState } from '../Context';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

const TruckRender = () => {

  // const {id} = useParams();
  // console.log("id :"+id)

  const { category, subCategory, vendors, setVendors,mainrental,setmainrental, setmodelType,  setrentalprice, setrentalquantity} = OrderState();
  console.log(category, " ", subCategory, " ")

  


  // console.log(vendors) 
  const [num, setNum] = useState(1);
  const [nums, setNums] = useState(vendors.map(() => 0));
  const [vehicount,setvehicount] = useState([]);

  const incNum = (index) => {
    if (nums[index] < vendors[index].services[0].stock) {
      const newNums = [...nums];
      newNums[index] += 1;
      setNums(newNums);
    }
  }
  const decNum = (index) => {
    if (nums[index] >= 0) {
      const newNums = [...nums];
      newNums[index] -= 1;
      setNums(newNums);
    }
  }


  const navigate = useNavigate();

  const goToRegistration = () => {

    console.log("akshay")
    
    navigate('/addon');
  }


  useEffect(() => {
    fetchVendors();
  }, []);

  // const[vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/user/vendors");
      const sortedVendors = response.data.sort((a, b) => a.services[0].price - b.services[0].price);
    setVendors(sortedVendors);
    // setvehicount(sortedVendors.services[0].stock)
    // vendors.map((data, index) => {setvehicount(data.services[0].stock)});
    // console.log(vehicount[0])

      // console.log(vendors)
    } catch (error) {
      console.log(error);
    }
  };



  // useEffect(() => {
  //   // document.body.style.overflowY = "hidden";
  //   return () => {
  //     // document.body.style.overflowY = "scroll";
  //     setasteper(astepper+1);
  //   };
  // }, []);

  // console.log(astepper)

  const [astepper, setasteper] = useState(-1);

  const handleData =(data,index)=>{
    setmainrental(data.name)
    setmodelType(data.services[0].modelType)
    setrentalprice(data.services[0].price)
    setrentalquantity(nums[index])
  }


  return (
    <>
      <div className='topmarg'>
        <MuiStepper isPositionFixed={true} astepper={astepper} />
      </div>
      <div className="combiness">
        <SideBar/>
        <div className="combine-page">
          <Shortby/>

          <div>
            {vendors.map((data, index) => {
              if (category === data.services[0].serviceType && subCategory === data.services[0].rentalvehical) {
                return (
                  <div className="searchItems1" key={index}>
                    <div className="img_2">
                      <img
                        src={data.services[0].images[0]} alt=""
                        className="siImg"

                      />
                      <img src={data.logo} alt="" width={70} height={50} className='service_providers1' />
                    </div>
                    <div className="siDesc">
                      <h1 className="siTitle"> {data.services[0].name}</h1>
                      <span className="siSubtitle">
                        {data.services[0].modelType}
                      </span>
                      <span className="siFeatures">
                        {data.services[0].description}
                      </span>
                      {data.services[0].cancelable === "true" && (
                        <span className="siCancelOp">Free cancellation</span>
                      )}
                      {data.services[0].cancelable === "true" && (
                        <span className="siCancelOpSubtitle">
                          You can cancel later, so lock in this great price today!
                        </span>
                      )}
                    </div>
                    <div className="siDetails">
                      <div className="siRating">
                      {data.services[0].rate>=4.0 && (
                        <span>Excellent</span>
                      )}
                      {data.services[0].rate<=4.0 && (
                        <span>Average</span>
                      )}
                        <button>{data.services[0].rate}</button>
                      </div>
                      <div className="siDetailTexts">
                        <span className="siPrice">₹{data.services[0].price}</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <span className="siTaxOp">You Can Select Vehicle Upto : {data.services[0].stock}</span>
                        <div className="amount-vehicle">
                        <Button size='large' onClick={() => decNum(index)} disabled={nums[index]===0}>-</Button>
                          <span>{nums[index]}</span>
                          <Button onClick={() => incNum(index)}>+</Button>
                        </div>
                        <Link to='/service'>
                          <button className="siCheckButton" disabled={nums[index]===0} onClick={()=> handleData(data,index)}>See availability</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>


          {/* <div className="searchItems1">
            <div className="img_2">

              <img
                src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/carouselimageswithouttext/vehicles/pickup-trucks/OQAR_22_ThreeFourths%20Ton%20Pickup_AngularFront_US-ENG.png"
                alt=""
                className="siImg"

              /><img src="https://www.enterprisetrucks.com/truckrental/en_US/_jcr_content/header-ipar/pageheader/header-logo.coreimg.png/1649207221168/en-logo-195x84.png" alt="" width={40} height={20}
                className='service_providers1' />
            </div>

            <div className="siDesc">
              <h1 className="siTitle">3/4 Ton Pickup Truck</h1>

              <span className="siSubtitle">
                GMC SIERRA 2500 CREW CAB OR SIMILAR
              </span>

              <span className="siFeatures">
                Towing Capable
              </span>
              <span className="siCancelOp">Free cancellation </span>
              <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
              </span>
            </div>


            <div className="siDetails">
              <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
              </div>
              <div className="siDetailTexts">
                <span className="siPrice">₹1162.00</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <div className="amount-vehicle">

                  <Button size='large' onClick={decNum}>-</Button>
                  <span>{num}</span>
                  <Button onClick={incNum}>+</Button>
                </div>

                <Link to='/service'>
                  <button className="siCheckButton" >See availability</button>

                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="searchItems1">
      <div className="img_2">

    <img
      src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/carouselimageswithouttext/vehicles/pickup-trucks/OQAR_22_ThreeFourths%20Ton%20Pickup_AngularFront_US-ENG.png"
      alt=""
      className="siImg"
      
    /><img src="https://www.logisticmart.com/style/images/logo.png" alt="" width={40} height={20} 
    className='service_providers1'/>
      </div>
    
    <div className="siDesc">
      <h1 className="siTitle">3/4 Ton Pickup Truck</h1>
     
      <span className="siSubtitle">
      GMC SIERRA 2500 CREW CAB OR SIMILAR
      </span>
      
      <span className="siFeatures">
      Towing Capable
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>


    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">₹2162.00</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <div className="amount-vehicle">
                      
                        <Button size='large' onClick={decNum}>-</Button>
                        <span>{num}</span>
                        <Button onClick={incNum}>+</Button>
                        </div>
                  
        <Link to='/service'>
        <button className="siCheckButton" >See availability</button>
        
        </Link>
      </div>
    </div>
    </div> */}


        


          {/* <div>
            {vendors.map((data, index) => {

              // if(data.serviceType === 'Cars'  && data.name === 'Small'){
              <div className="searchItems1" key={index}>
               
                <div className="img_2">

                  <img
                    src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/carouselimageswithouttext/vehicles/pickup-trucks/OQAR_22_ThreeFourths%20Ton%20Pickup_AngularFront_US-ENG.png"
                    alt=""
                    className="siImg"

                  />
                  <img src={data.logo} alt="" width={70} height={50}
                    className='service_providers1' />
                </div>

                <div className="siDesc">

                  <span className="siSubtitle">
                  
                  </span>

                  <span className="siFeatures">
                    Towing Capable
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>


                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                  <div className="siDetailTexts">
                    <span className="siPrice">₹3162.00</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <div className="amount-vehicle">

                      <Button size='large' onClick={decNum}>-</Button>
                      <span>{num}</span>
                      <Button onClick={incNum}>+</Button>
                    </div>

                    <Link to='/service'>
                      <button className="siCheckButton" >See availability</button>

                    </Link>
                  </div>
                </div>
              </div>
              // }
            })}
          </div> */}


          {/* <div className='rentallist'>
      {vendors.map((data,index)=>(
    <div className="searchItems1" key={index}>
      <div className="img_2">

    <img
      src={data.logo}
      alt=""
      className="siImg"
      
    /><img src="https://logowik.com/content/uploads/images/719_budget_logo.jpg" alt="" width={70} height={50} 
    className='service_providers1'/>
      </div>
    
    <div className="siDesc">
      <h1 className="siTitle">{data.name}</h1>
     
      <span className="siSubtitle">
      GMC SIERRA 2500 CREW CAB OR SIMILAR
      </span>
      
      <span className="siFeatures">
      Towing Capable
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>


    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">₹3162.00</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <div className="amount-vehicle">
                      
                        <Button size='large' onClick={decNum}>-</Button>
                        <span>{num}</span>
                        <Button onClick={incNum}>+</Button>
                        </div>
                  
        <Link to='/service'>
        <button className="siCheckButton" >See availability</button>
        
        </Link>
      </div>
    </div>
    </div>
      ))}
    </div> */}
        </div>
      </div>



    </>
  )
}

export default TruckRender
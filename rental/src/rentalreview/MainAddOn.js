import { useState, useEffect, React } from 'react'
import './mainaddon.css'

import logo1 from '../user/bucket.png'
import { useNavigate } from 'react-router-dom'
import MuiStepper from '../steper/MuiStepper'
import ReactDOM from 'react-dom'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OrderState } from '../Context';

const MainAddOn = ({ closeModal }) => {

    const { category, subCategory, vendors,subservicename, setVendors,mainrental,setmainrental, setmodelType,  setrentalprice, setrentalquantity} = OrderState();
    console.log(category, " ", subCategory, " "+ subservicename)
  

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    // Increment and Decrment
    const [number1,setNumber1] = useState(0);
    const [number2,setNumber2] = useState(0);
    const [number3,setNumber3] = useState(0);

    const increment1 = ()=>{
        setNumber1(prevNumber => prevNumber + 1);
    }

    const decrement1 = ()=>{
        if(number1>0)
        setNumber1(prevNumber => prevNumber -1);
    }
    const increment2 = ()=>{
        setNumber2(prevNumber => prevNumber + 1);
    }

    const decrement2 = ()=>{
        if(number2>0)
        setNumber2(prevNumber => prevNumber -1);
    }
    const increment3 = ()=>{
        setNumber3(prevNumber => prevNumber + 1);
    }

    const decrement3 = ()=>{
        if(number3>0)
        setNumber3(prevNumber => prevNumber -1);
    }

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    const goToRegistration1 = () => {

        navigate('/registration');
    }

    const goToRegistration2 = () => {

        navigate('/edit');
    }

    // Navigations of AddOns
    // Counting the addons
    let [count,setCount] = useState(0);
    let [count1,setCount1] = useState(0);
    let [count2,setCount2] = useState(0);
    let [count3,setCount3] = useState(0);
    //let newWindow=null;

    // const incrementCount = ()=>{
    //     setCount(count+1);
    //     if(newWindow){
    //         newWindow.close();
    //     }
    // }

    const LaborPickUp = () => {

        localStorage.setItem('count',count);
        window.open('/laborpickup');
        const count1 = localStorage.getItem('count');
        // console.log("Labor",count1)
        
        setCount(localStorage.count)
    // console.log("Aksahy",count)
    }

    const CarAddOn = () => {

        // navigate('/caraddon');
        localStorage.setItem('count1',count1);
        window.open('/caraddon');
        const c1 = localStorage.getItem('count1');
        // console.log("Labor",count1)
        
        setCount1(localStorage.count1)
    // console.log("Aksahy",count)
    }

    const Towing = () => {

        // navigate('/towing');
        localStorage.setItem('count2',count2);
        window.open('/towing');
        const c1 = localStorage.getItem('count2');
        // console.log("Labor",count1)
        
        setCount2(localStorage.count2)
    }

    const Trailer = () => {

        // navigate('/trailer');
        localStorage.setItem('count3',count3);
        window.open('/trailer');
        const c1 = localStorage.getItem('count3');
        // console.log("Labor",count1)
        
        setCount3(localStorage.count3)
    }


    useEffect(() => {
        const updateCount = () => {
          const newCount = localStorage.getItem('count') || 0;
          const newCount1 = localStorage.getItem('count1') || 0;
          const newCount2 = localStorage.getItem('count2') || 0;
          const newCount3 = localStorage.getItem('count3') || 0;
          setCount(newCount);
          setCount1(newCount1);
          setCount2(newCount2);
          setCount3(newCount3);
        };
    
        window.addEventListener('storage', updateCount);
    
        return () => {
          window.removeEventListener('storage', updateCount);
          localStorage.clear();
        };
      }, []);


    const PickUpList = () => {

        navigate('/pickuplist');
    }
    
   
 

    




    return (
        <>
            <div className="wrapper" onClick={closeModal}></div>
            <div className="container">
                
                <div className="addondiv">
                    <h3>Add On's</h3>
                </div>
                <button className="bts11" onClick={() => goToRegistration1(true)}>
                        Continue
                    </button>
                <div>
                {vendors.map((data, index) => {
              if (subservicename === data.services[0].subservicename ) {
                return (
                    <div className='carditems' key={index}>
                    {data.services.map((service, serviceIndex) => (
                    <div className='pickup1 ' key={serviceIndex}>
                        <div className='centerq'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pad</h3>
                            {/* <button className='color'>
                                Edit
                            </button> */}
                            <span className='textcolors'>${service.addons.ferniturePad.price}.00</span> <span className='unit'>per unit</span><br/>
                            <span className='textcolors'>availability - {service.addons.ferniturePad.quantity}</span> <span className='unit'></span><br/>
                            <button className='allbtns' onClick={decrement1}>-</button>
                            <span className='numbergen'>{number1}</span>
                            <button className='allbtns' onClick={increment1}>+</button>
                        </div>
                    </div>
                      ))}
                    {data.services.map((service, serviceIndex) => (
                        <div className='pickup1' key={serviceIndex}>
                        <div className='centerq'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Hand Truck</h3>
                            <span className='textcolors'>${service.addons.handTruck.price}.00</span> <span className='unit'>per unit</span><br/>
                        <span className='textcolors'>availability - {service.addons.handTruck.quantity}</span> <span className='unit'></span><br/>
                            <button className='allbtns' onClick={decrement2}>-</button>
                            <span className='numbergen'>{number2}</span>
                            <button className='allbtns' onClick={increment2}>+</button>
                            {/* <button className='color'>
                                Edit
                            </button> */}
                        </div>
                    </div>
                     ))}
                    {data.services.map((service, serviceIndex) => (
                        <div className='pickup1' key={serviceIndex}>
                        <div className='centerq'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Truck Pad</h3>
                            <span className='textcolors'>${service.addons.truckPad.price}.00</span> <span className='unit'>per unit</span><br/>
                        <span className='textcolors'>availability - {service.addons.truckPad.quantity}</span> <span className='unit'></span><br/>
                            <button className='allbtns' onClick={decrement3}>-</button>
                            <span className='numbergen'>{number3}</span>
                            <button className='allbtns' onClick={increment3}>+</button>
                            {/* <button className='color'>
                                Edit
                            </button> */}
                        </div>
                    </div>
                    ))}
                    <div className='pickup flexyed1'>
                       
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Labor PickUp</h3>
                            
                            <button className='color' onClick={()=>LaborPickUp()}>
                                Select
                            </button>
                        </div>
                        <div className='n1'>
                            {/* <img src={logo1} className='addonimgs1 ' /> <br /> */}
                            <FontAwesomeIcon className='icons1' icon={faCartShopping} />
                            <span className='countitems'>{count}</span>
                        </div>
                    </div>
                    {/* <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>PickUp list</h3>
                            <span>Count : {count}</span>
                            <button className='color' onClick={()=>PickUpList()}>
                                Select
                            </button>
                        </div>
                    </div> */}
                    <div className='pickup flexyed1'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>CarAddOn</h3>
                            {/* <span>Count : {count1}</span> */}
                            <button className='color' onClick={()=>CarAddOn()}>
                                Select
                            </button>
                        </div>
                        <div className='n1'>
                            {/* <img src={logo1} className='addonimgs1 ' /> <br /> */}
                            <FontAwesomeIcon className='icons1' icon={faCartShopping} />
                            <span className='countitems'>{count1}</span>
                        </div>
                    </div>
                    <div className='pickup flexyed1'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Towing</h3>
                            {/* <span>Count : {count2}</span> */}
                            <button className='color' onClick={()=>Towing()}>
                                Select
                            </button>
                        </div>
                        <div className='n1'>
                            {/* <img src={logo1} className='addonimgs1 ' /> <br /> */}
                            <FontAwesomeIcon className='icons1' icon={faCartShopping} />
                            <span className='countitems'>{count2}</span>
                        </div>
                    </div>
                    <div className='pickup flexyed1'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Trailer</h3>
                            {/* <span>Count : {count3}</span> */}
                            <button className='color' onClick={()=>Trailer()}>
                                Select
                            </button>
                        </div>
                        <div className='n1'>
                            {/* <img src={logo1} className='addonimgs1 ' /> <br /> */}
                            <FontAwesomeIcon className='icons1' icon={faCartShopping} />
                            <span className='countitems'>{count3}</span>
                        </div>
                    </div>
                    {/* <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div> */}

                  
                </div>
               );
            } else {
              return null;
            }
          })}
                </div>
            </div>

        </>
    )
}

export default MainAddOn
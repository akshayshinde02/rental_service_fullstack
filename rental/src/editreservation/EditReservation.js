import { React, useState } from 'react'
import './editreservation.css'
import Navbar from '../rental/Navbar'
import logo from '../user/truck.jpg'
// import MyModal from '../addons/ShowModel'
import PopUpCancelPage from './PopUpCancelPage'

const EditReservation = () => {

    const [isVissible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [confirmation, setconfirmation] = useState(true);

    // setconfirmation(true);
    const closeModal = () => setShowModal(false);

    const toggleVisibility = () => {
        setIsVisible((preVisible) => !preVisible);
    }

    const handleCancellation = () => {
        setconfirmation(false);
        setShowModal(true);
    }


    return (
        <>
            {/* <Navbar /> */}

            {/* {showModal && <PopUpCancelPage closeModal={closeModal}  />} */}

            {/* If the reservation is cancelled */}
            <div style={{marginTop:"90px"}}></div>
            {confirmation ? (


                <div className='reservationnumber'>
                    <span className='number'>You'r Reservation Number is  : 12345</span>
                </div>

            ) : (

                <div >
                    <div className='redcolor'>
                        Your Reservation Has Being Cancelled!!!
                    </div>
                    <div className='textcolor'>
                        Your Reservation 12345 Successfully Get Cancelled
                    </div>
                    <div className='subcolor'>
                        Cancellation Email Has Being Send To Your Email Address
                    </div>
                </div>

            )}
            {/* If the reservation is not cancelled */}


            <div className='numline'></div>

            <div className='totaldiv'>
                <div className='cusdetail'>
                    <div className='subcus'>
                        <span className='names'>Customer Name</span><br />
                        <span className='values'>Akshay Shinde</span>
                    </div>
                    <div className='subcus'>
                        <span className='names'>Email Address</span><br />
                        <span className='values'>akshay@gmail.com</span>
                    </div>
                    <div className='subcus'>
                        <span className='names'>Card Number</span><br />
                        <span className='values'>############1234</span>
                    </div>
                </div>
                <div className='numline1'></div>
                {/* <div className={`editdiv hideshow ${isVissible ? 'showy' : 'hide'}`}> */}
                <div className={`editdiv`}>

                    <div className='editpickaddon11'>
                        <div className="pickdrop1">
                            <div className='pickupcontianer'>
                                <div className='ter'>
                                    <span className='datetime center' >Date and Time</span><br />
                                </div>
                                <div className="numline11"> </div>
                                <div className="flexedyy">

                                    <div className="subflex">
                                        <div className="flexy1">
                                            <span className="picktime bold graycolor">PickUp Date Time </span><br /><br />
                                            <span className="pickupdate">10 AM <br /> Sun, Sept 24</span>
                                        </div><br />
                                        <div className="flexy1">
                                            <span className="picktime bold graycolor"> PickUp Location </span><br /><br />
                                            <span className="pickupdate">4646 California</span>
                                        </div><br />

                                    </div><br />

                                    <div className="subflex">
                                      
                                        <div className="flexy1">
                                            <span className="picktime bold graycolor">DropUp Date Time </span><br /><br />
                                            <span className="pickupdate ">10 AM <br /> Sun, Sept 24</span>
                                        </div><br/>
                                        <div className="flexy1">
                                            <span className="picktime bold graycolor"> DropUp Location </span><br /><br />
                                            <span className="pickupdate">4646 California</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='addOndiv'>
                            <span className='titley1 bold  addon' style={{ margin: '25px' }} >Add On's</span><br /><br />
                            <div className='addondivss'>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                             
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>

                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>

                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                                <div className='pickup1'>
                                    <div className='center'>
                                        <img src={logo} className='addonimg ' /> <br />
                                        <h3 className='center'>Furniture Pads</h3>
                                        {/* <button className='color'>
                                Edit
                            </button> */}
                                    </div>
                                </div>
                            </div><br /><br />
                        </div>

                        <br />  <br />  <br />


                    </div>

                    <div className='truckreservation'>
                        <div className='container79'>
                            <div className='center'>
                                <span className='titley1 servicetitle'>Service Truck Name</span><br />
                                <span className='serviceName'>Rental Service Name</span>

                                <div className='truckimage'>
                                    <img src={logo} className='truckimgs1' />
                                </div>
                            </div>

                            <div className='charges'>
                                <div className='pricestitle1'>
                                    <span className='bold'>Cargo Truck</span>
                                    <span className='cost'>$354</span>
                                </div>
                                {/* <span className='bold'>Price of Truck</span> <br />
                    <span className='top'>Truck Name On Addtion Unlimited Miles</span> <br /><br /> */}

                                <div className='pricestitle'>
                                    <span className='bold'> Protection</span> <br />
                                    <span className='cost'>$354</span>
                                </div>
                                <span className='top'>Supplemental Liability (Sli) $97.35 <br />
                                    Physical Damage Waiver $114.95  <br />
                                    Personal Accident & Cargo $52.25   <br />
                                    Roadside Safety Net $69.95</span> <br /><br />

                                <div className='pricestitle'>
                                    <span className='bold'> Add Ons  </span><br />
                                    <span className='cost'>$354</span>
                                </div>
                                <span className='top'>No Hand Truck(s)  = $0.00 <br />
                                    No Furniture Pads  = $0.00</span><br /><br />

                                <div className='pricestitle'>
                                    <span className='bold'> Taxes </span><br />
                                    <span className='cost'>$354</span>
                                </div>
                                <span className='top'>
                                    Sales Tax $244.49   <br />
                                    Cost Recovery Fee 5 Day(S) @ 3.50 = $17.50  <br />
                                    Energy Recovery Fee 5 Day(S) @ .13 = $0.65  <br />
                                    Fleet Management Fee 5 Day(S) @ 1.00 = $5.00 <br />
                                </span> <br />
                                <div className='numline2'></div>
                                <div className='pricestitle'>
                                    <span className='estcost'>Estimated Cost</span><br />
                                    <span className='cost estcost'>$2433.23</span><br />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* <div className='togglebtn'>
                    <button onClick={toggleVisibility} className='button'>
                        {isVissible ? 'Hide ' : 'Show '}
                    </button>
                </div> */}
                <div className='allbtn'>
                    {/* <button className='color btnss'>Cancel Reservation</button> */}
                    <button className='color btnss'>Resend Email</button>
                    <button className="color btnss" onClick={handleCancellation}>
                        Cancel Reservation
                    </button>
                    {showModal && <PopUpCancelPage closeModal={closeModal} confirmation={confirmation} />}
                    {showModal && <PopUpCancelPage closeModal={() => setShowModal(false)} confirmation={() => setconfirmation(false)} />}
                </div>

            </div>
        </>
    )
}

export default EditReservation
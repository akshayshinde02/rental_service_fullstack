import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from '../rental/Navbar'
import './UserRegistration.css';
import logo from './truck.jpg'
import logo1 from './bucket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '../rental/ProgressBar';
import EndPage from '../endpage/EndPage';
import MuiStepper from '../steper/MuiStepper';

const UserRegistration = () => {

    const [name, setName] = useState("");

    const [isVissible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const toggleVisibility = () => {
        setIsVisible((preVisible) => !preVisible);
    }


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        creditCardNumber: '',
        expDate: '',
        acceptedTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission, validation, or API calls here
    };

    const [astepper,setasteper] = useState(2);

    // useEffect(() => {
    //     // document.body.style.overflowY = "hidden";
    //     return () => {
    //       // document.body.style.overflowY = "scroll";
    //       setasteper(astepper+1);
    //     };
    //   }, []);

    return (<>
        {/* <Navbar /> */}
        <div style={{marginTop:"10px"}}></div>
        <br/><br/><br/>
        <div className='progresscenter' >
            {/* <ProgressBar /> */}
            <MuiStepper isPositionFixed={false} astepper={astepper}/>
        </div>
        <div className='container3'>

            <div className='container7'>
                <div className='center'>
                    <span className='titley1 servicetitle'>Service Truck Name</span><br />
                    <span className='serviceName'>Rental Service Name</span>

                    <div className='truckimages1'>
                        <img src={logo} className='truckimg' />
                    </div>
                </div>

                <div className='charges'>

                    <div className="progressline211"></div><br/>
                    <div className='pricestitle'>
                        <span className='bold'>Cargo Truck</span>
                        <span className='cost'>$254</span>
                    </div>

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
                    <span className='top'>
                        Sales Tax $244.49   <br />
                        Cost Recovery Fee 5 Day(S) @ 3.50 = $17.50  <br />
                        Energy Recovery Fee 5 Day(S) @ .13 = $0.65  <br />
                        Fleet Management Fee 5 Day(S) @ 1.00 = $5.00 <br />
                    </span> <br />

                    <div className="progressline2111"></div><br/>

                    <div className='pricestitle'>
                        <span className='estcost'>Estimated Cost</span><br />
                        <span className='cost estcost'>$2433.23</span><br />
                    </div>

                    <div className="progressline2111 margintopy"></div><br/>
                </div>

            </div>


            {/* <div className={`hideshow container5 ${isVissible?'show' : 'hide'}`} > */}
            <div className="container5" >

                <div className='container6'>

                    <div className='flexyed'>
                        <div className='pickupflex'>
                            <span className='titley1  bold'>Pick Up</span><br />
                            <span className='pickupaddress space'>4646 California</span> <br />
                            <span className='pickupdate'>Sun, 9:20AM Sept 24</span> <br />

                        </div>
                        <div
                            className="progressline2"
                            style={{ width: `${12}%` }}
                        ></div>
                        <div className='dropupflex'>
                            <span className='titley1 bold'>Drop Up</span><br />
                            <span className='dropupaddress space'>2001 Los Angels</span> <br />
                            <span className='pickupdate'>Tues, 9:20AM Sept 30</span> <br />

                        </div>
                    </div><br />
                </div><br /><br />
                <div className='titley1 bold addon ' style={{ textAlign: 'center' }} >Add On's</div>
                <div className={`hideshow addondiv11 ${isVissible ? 'show' : 'hides'}`}>
                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='pickup'>
                        <div className='center'>
                            <img src={logo1} className='addonimg ' /> <br />
                            <h3 className='center'>Furniture Pads</h3>
                            <button className='color'>
                                Edit
                            </button>
                        </div>
                    </div>
                </div><br /><br />
                <div className='togglebtn'>
                    <button onClick={toggleVisibility} className='button'>
                        {isVissible ? 'Hide ' : 'Show '}
                    </button>
                </div>
                <br />  <br />  <br />

                {/* Form */}
                <div className='twoway'>
                    <div className='container4'>
                        <div className='titley1'>Driver Information</div>
                        <form>
                            <label>First Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>Last Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>Email Address:
                                <input
                                    type="email"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>Phone:
                                <input
                                    type="email"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>

                        </form>
                    </div>
                    {/* <label>Address:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>City:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>State:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>Zip Code:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <label> Driver's Age
                            <select >
                                <option value="grapefruit">Over 18</option>
                                <option value="lime">18</option>
                                <option value="coconut">Under 18</option>
                            </select>
                        </label> */}



                    {/* Card Information */}


                    <div className='container45'>
                        <div className='titley1'>Payment Information</div>
                        {/* <form onSubmit={handleSubmit}> */}

                        <div className="form-group">
                            <label htmlFor="creditCardNumber">Credit Card #*</label>
                            <input
                                type="text"
                                id="creditCardNumber"
                                name="creditCardNumber"
                                value={formData.creditCardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="expDate">Exp Date* (MM/YY)</label>
                            <input
                                type="text"
                                id="expDate"
                                name="expDate"
                                value={formData.expDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="creditCardNumber">CVV Number *</label>
                            <input
                                type="text"
                                id="creditCardNumber"
                                name="creditCardNumber"
                                value={formData.creditCardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className='box'>
                                <div className='con1'>
                                    <input
                                        type="checkbox"
                                        name="acceptedTerms"
                                        checked={formData.acceptedTerms}
                                        onChange={handleChange}
                                    /> </div>
                                <div className='con2'>
                                    I accept the Terms and Conditions
                                </div>
                            </label>
                        </div>

                        {/* Pop Up Windows */}
                        {/* <button type="submit" className='buttons btn1'>Reserve Now</button> */}
                        <button className="buttons btn1" onClick={() => setShowModal(true)}>
                            Click To Continue
                        </button>
                        {showModal && <EndPage closeModal={closeModal} />}
                        {/* </form> */}
                    </div>

                </div><br />
            </div>



        </div>
    </>
    )
}

export default UserRegistration
{/* <div className='payment'>

<label>Credit Card Number:
<input
type="number"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</label>
<label>Expiry Date:
<input
type="number"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</label>
</div> */}
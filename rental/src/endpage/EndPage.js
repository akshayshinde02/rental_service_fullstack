import{ useState,useEffect,React} from 'react'
import './endpage.css'
import logo1 from '../user/bucket.png'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const EndPage = ({  closeModal }) => {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);


    // const arr = [title = "Truck Add On's",
    // description = " trucks Addon's for rent."];

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    const goToRegistration1 =()=>{

        navigate('/registration');
    }

    const goToRegistration2 =()=>{

        navigate('/edit');
    }

    return (
        <>
            <div className="wrapper" onClick={closeModal}></div>
            <div className="containersss">
                <div className='borderline'>
                <div className="thankmsg">  <FontAwesomeIcon icon={faCircleCheck} /> Registration Done Successfuly!!!</div>
                <div className="registration">Thank You For Registration</div>
                <div className="titley">Your Reservation Id is : 12345</div>
                <div className="emailid">* Email Has Been Send To Your Email Id *</div>

                <div className='liney'></div><br/>

                <div className='btnsdisplay'>
                <button className="model-btn b11" onClick={() => goToRegistration1()}>Continue</button>
                <button className="model-btn b22" onClick={() => goToRegistration2()}>Edit Reservation</button>
                </div>

                <div className='provide'>We Also Provide</div>

                <div className='flexdiv'>
                <div className="cardyy">
                        <img src={logo1} className='img' /> <br />
                        <h2 className='named1'>Courior Service</h2>
                    </div>
                <div className="cardyy">
                        <img src={logo1} className='img' /> <br />
                        <h2 className='named1'>Storage Service</h2>
                    </div>
                </div>
                {/* <div className='flexy'>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg' /> <br />
                        <h2>Furniture Pads</h2>
                       <input type="number"/>
                    </div>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg' /> <br />
                        <h2>Hand Truck</h2>
                       <input type="number"/>
                    </div>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg ' /> <br />
                        <h2>Load and Unload Help</h2>
                        <a href="">Get an Help </a> 
                    </div>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg ' /> <br />
                        <h2>Trailers</h2>
                        <a href="">Get an Help </a> 
                    </div>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg ' /> <br />
                        <h2>Complete Protection Pack</h2>
                        <p>$322.23 per Truck</p>
                        <button className="model-btn">Select</button>
                    </div>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg ' /> <br />
                        <h2>Value Protection Package </h2>
                        <p>$177.12 per trip</p>
                        <button className="model-btn">Select</button>
                    </div> */}
                    {/* <div className="truck-card">
                        <img src={logo1} className='addonimg ' /> <br />
                        <h2>{arr.title}</h2>
                        <p>{arr.description}</p>
                    </div>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg ' /> <br />
                        <h2>{arr.title}</h2>
                        <p>{arr.description}</p>
                    </div>
                    <div className="truck-card">
                        <img src={logo1} className='addonimg ' /> <br />
                        <h2>{arr.title}</h2>
                        <p>{arr.description}</p>
                    </div> */}

                {/* </div> */}
                {/* <button className="model-btn" onClick={closeModal}>Skip For Now</button> */}
               
                {/* <button className="model-btn" onClick={() => setShowModal(true)}>
            Click To Continue
          </button> */}
          {/* {showModal && <UserRegistration  />} */}
            </div>
            </div>
        </>
    );
};



export default EndPage
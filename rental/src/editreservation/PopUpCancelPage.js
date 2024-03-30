import React from 'react'
import {  useState } from "react";
import { useEffect } from "react";
import logo1 from '../user/bucket.png'
import {useNavigate} from 'react-router-dom'
import EditReservation from './EditReservation';
import { Link } from 'react-router-dom';

const PopUpCancelPage = ({closeModal, confirmation}) => {

    // console.log(confirmation)
    // console.log(closeModal)

    const [showModal, setShowModal] = useState(false);
    // const [confirmation, setconfirmation] = useState(false);

    const [checkedItems, setCheckedItems] = useState({
        "Truck No Longer Needed": false,
        "Poor Service": false,
        "Date Changed": false,
        "Found Better Option": false,
        "Truck No Longer Needed": false
      });

      const handleCheckboxChange=(event)=>{
        const {name,checked} = event.target;
        setCheckedItems({...checkedItems,[name]:checked});
      }

    const goToRegistration =()=>{
        closeModal()
        // console.log(confirmation)
        // console.log("hi")
    }

    return (
        <>
            <div className="wrapperItem" onClick={closeModal}></div>
            <div className="containerItem">
            <div className='borderlin'>

                <div className='redcolor'>
                    Cancellation Confirmation !!!
                </div>
                <div className='doubttext'>Can you Provide Reason for Cancellation?</div>

                <ul className='checklist'>
                    {Object.entries(checkedItems).map(([key,value])=>(
                        <span key={key}>
                            <label className='checklist-item'>
                                <input 
                                type='checkbox'
                                name={key}
                                checked={value}
                                onChange={handleCheckboxChange}
                                className='inputform'
                                />
                               <span className='keyvalue'>{key}</span> 
                                <span className='checkmark'></span>
                            </label>
                        </span>
                    ))}

                </ul>

              
                <div className='center divcenter'>
                <button className="cancelbtn " onClick={() => goToRegistration()}>Confirm Cancellation</button>
                
                </div>
                </div>
            </div>

            {/* {goToRegistration && <EditReservation/>} */}
           
        </>
    );
};

export default PopUpCancelPage
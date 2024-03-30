import React, { useEffect, useState } from 'react'
import './TruckService.css'
import logo from './rental.jpg'
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom'
import { OrderState } from '../Context';
import axios from 'axios';
const { TimePicker } = DatePicker;

const Items = ({ mainrental }) => {



  const { setsubservicename } = OrderState();
  const [vendors, setVendors] = useState([]);
  // console.log(category, " ", subCategory, " ", age)
  // console.log(vendors)
  // console.log(mainrental)


  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/user/vendors");
        // const sortedVendors = response.data.sort((a, b) => a.services[0].price - b.services[0].price);
        setVendors(response.data);
        // setvehicount(sortedVendors.services[0].stock)
        // vendors.map((data, index) => {setvehicount(data.services[0].stock)});
        // console.log(vehicount[0])

      } catch (error) {
        console.log(error);
      }
    }
    fetchVendors();
  }, []);

  useEffect(() => {
    console.log(vendors);
  }, [vendors]);

  // const[vendors, setVendors] = useState([]);




  const navigate = useNavigate();

  const goToRegistration = (data) => {
    setsubservicename(data.services[0].subservicename)
    navigate('/addon');
  }


  return (
    <>
      <div>
        {vendors.map((data, index) => {
          if (mainrental === data.name) {
            return (
              <div className='serachItem' key={index}>

                <div className='openClosed'> open</div>
                <img src={data.logo} className='image' />

                <div className='desc' >
                  { }
                  <h1 className='titley1'>{data.services[0].subservicename}</h1>
                  {/* <span className='distance'>500 mtr</span> */}
                  <span className='subtitle'>{data.services[0].description}</span>
                  <div className='rating'>
                    {data.services[0].rate >= 4.0 && (
                      <span>Excellent</span>
                    )}
                    {data.services[0].rate <= 4.0 && (
                      <span>Average</span>
                    )}
                    <button>{data.services[0].rate}</button>
                  </div>
                </div>

                <div className='time' >
                  Su  Holiday  <br />
                  M-F  {data.workingTime.startTime} - {data.workingTime.endTime} <br />
                  Sa   {data.workingTime.startTime} - {data.workingTime.endTime} <br />
                </div>
                <div className='details'>
                  <button className='searchItem' onClick={() => goToRegistration(data)}>Select Service</button>

                </div>
              </div>
            );
          } else {
            return null;
          }
          // )
        })}
      </div>
    </>
  )
}

export default Items
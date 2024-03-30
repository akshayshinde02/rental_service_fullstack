import React from 'react'
import './navbar.css';
import { DatePicker } from 'antd';
const {RangePicker} = DatePicker;


const RentalDates = () => {
  return (
    <div  className='range'>
        <RangePicker className='rangepicker'/>
        
    </div>
  )
}

export default RentalDates
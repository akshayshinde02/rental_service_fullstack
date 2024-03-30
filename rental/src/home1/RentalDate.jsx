import { DatePicker } from 'antd';
import React from 'react'
import './rentaldate.css'

const {RangePicker} = DatePicker;
const { TimePicker} = DatePicker; 
const RentalDate = () => {
  return (
    <div  className='range'>
        <RangePicker className='rangepicker'/>
        <div className="range_1">

        <p className='margindone'>Pick-up Time</p>
        <TimePicker className='timepicker'/>
        </div>
        <div className="range_2">

        <p  className='margindone'>Return Time</p>
        <TimePicker className='timepicker'/>
        </div>
    </div>
  )
}

export default RentalDate
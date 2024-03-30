import React, { useState } from 'react'
import './Style/caraddons.css'
import CheckBox  from '@mui/icons-material/CheckBox'
import { Button, FormControl, FormControlLabel, FormLabel } from '@mui/material'
const CarAddOn = () => {
    const[num,setNum]=useState(0);
    const incNum=()=>{
        setNum(num+1)
    }
    const decNum=()=>{
        setNum(num-1)
    }

    const [num2,setNum2]=useState(0);
    const incNum2=()=>{
        setNum2(num2+1)
    }
    const decNum2=()=>{
        setNum2(num2-1)
    }
    const [num3,setNum3]=useState(0);
    const incNum3=()=>{
        setNum3(num3+1)
    }
    const decNum3=()=>{
        setNum3(num3-1)
    }


    const handleClose = () => {
        // onClose();
        let c = localStorage.getItem('count1');
        console.log(c)
    
        let updateCount = parseInt(c)+1;
        localStorage.setItem('count1',updateCount);
        console.log("PickUp",c);
        window.close();
        
        
      };
    
    
    
  return (
    
    <div className='caraddon-main'>
        <div className="caraddon-page">
            <h2>Add Child Seats and Special Requests (Optional)</h2>
        </div>
        <p>You can request any of the options below. These requests cannot be guaranteed and additional fees may apply.
        Contact the rental car company to confirm availability.</p>
        <div className="caraddon-page-1">
            <h3>Child Seats (maximum of 3)</h3>
            <div className='mt-2'>
                <div className="check-main">
                    <div className="checkBox">
                     <FormControl
                      sx={{ 
                        color:"default",
                        width:'91%',
                        display:'flex',
                        flexDirection: 'row-reverse',
                     justifyContent:'space-between',
                     alignItems:'center',
                     marginTop:'3px',
                     marginLeft:0,
                     }}
                     
                     
                     >
                        <div className="none-1">

                            <FormLabel sx={{ 
          
                            fontSize:'0.795rem',
                             marginLeft:'20px',
          
                            }}>
                                For children weighing 40 to 80 lbs
                            </FormLabel>


                        <FormLabel sx={{ 
                            color:'Black',
                             fontSize:'1rem',
                            fontWeight:'700',
         
          
                            marginLeft:'20px',
          
                            }}>
                            Booster Seats
                            </FormLabel>
                        </div>

                       <FormControlLabel
                               
                            control={
                                <CheckBox
                                defaultChecked
                                />
                            }
                            sx={{
                                fontSize:"1.8rem"
                            }}
                         
                            labelPlacement='end'

                       />
                       
                     </FormControl>
                            
                       
                     </div>

                     <div className="displayprice">
                        <span>₹1162.44/day</span>
                        <div className="decbutton">

                        <Button size='large' onClick={decNum}>-</Button>
                        <span>{num}</span>
                        <Button onClick={incNum}>+</Button>
                        </div>
                    </div>


                </div>
                {/*2nd addon */}
                <div className="check-main">
                    <div className="checkBox">
                     <FormControl
                      sx={{ 
                        color:"default",
                        width:'91%',
                        display:'flex',
                        flexDirection: 'row-reverse',
                     justifyContent:'space-between',
                     alignItems:'center',
                     marginTop:'3px',
                     marginLeft:0,
                     }}
                     
                     
                     >
                        <div className="none-1">

                            <FormLabel sx={{ 
          
                            fontSize:'0.795rem',
                             marginLeft:'20px',
          
                            }}>
                                 Forward facing for children weighing 20-40 pounds up to 40 inches in height
                            </FormLabel>


                        <FormLabel sx={{ 
                            color:'Black',
                             fontSize:'1rem',
                            fontWeight:'700',
         
          
                            marginLeft:'20px',
          
                            }}>
                            Toddler Child Seat
                            </FormLabel>
                        </div>

                       <FormControlLabel
                               
                            control={
                                <CheckBox
                                
                                />
                            }
                            sx={{
                                fontSize:"1.8rem"
                            }}
                         
                            labelPlacement='end'

                       />
                       
                     </FormControl>
                            
                       
                     </div>

                     <div className="displayprice">
                        <span>₹996.37/day</span>
                        <div className="decbutton">

                        <Button size='large' onClick={decNum2}>-</Button>
                        <span>{num2}</span>
                        <Button onClick={incNum2}>+</Button>
                        </div>
                    </div>


                </div>
                {/*3nd addon */}
                <div className="check-main">
                    <div className="checkBox">
                     <FormControl
                      sx={{ 
                        color:"default",
                        width:'91%',
                        display:'flex',
                        flexDirection: 'row-reverse',
                     justifyContent:'space-between',
                     alignItems:'center',
                     marginTop:'3px',
                     marginLeft:0,
                     }}
                     
                     
                     >
                        <div className="none-1">

                            <FormLabel sx={{ 
          
                            fontSize:'0.795rem',
                             marginLeft:'20px',
          
                            }}>
                                 For infants less than one year and under 20 lbs
                            </FormLabel>


                        <FormLabel sx={{ 
                            color:'Black',
                             fontSize:'1rem',
                            fontWeight:'700',
         
          
                            marginLeft:'20px',
          
                            }}>
                            Infant Child Seat
                            </FormLabel>
                        </div>

                       <FormControlLabel
                               
                            control={
                                <CheckBox
                                
                                />
                            }
                            sx={{
                                fontSize:"1.8rem"
                            }}
                         
                            labelPlacement='end'

                       />
                       
                     </FormControl>
                            
                       
                     </div>

                     <div className="displayprice">
                        <span>₹1162.44/day</span>
                        <div className="decbutton">

                        <Button size='large' onClick={decNum3}>-</Button>
                        <span>{num3}</span>
                        <Button onClick={incNum3}>+</Button>
                        </div>
                    </div>


                </div>


                <Button variant="contained" 
    color='info'
    sx={{
      position:"relative",
      alignItems:"center",
      justifyContent:"center",
      display:"flex",width:"140px",
    flexDirection:"row-reverse",
    marginTop:"10px"
      
  }}
  onClick={handleClose} 
  >
        Select
       </Button>
            </div>
        </div>
    </div>
  )
}

export default CarAddOn
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { lightBlue } from '@mui/material/colors';
import FormLabel from '@mui/material/FormLabel';

const CheckboxProton = ({ changeChecked, cuisine }) => {
  const { checked, label, id } = cuisine;

  return (
    <div>
      <FormControl 
      
      sx={{ 
        color:"default",
       
        display:'flex',
        flexDirection: 'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'3px',
    marginLeft:0,
    }}>
        <FormControlLabel
          control={
            <Checkbox
              color='default'
              size='small'
              checked={checked}
              onChange={() => changeChecked(id)}
              inputProps={{ 'aria-label': 'checkbox with small size' }}
              sx={{
                color: lightBlue[50],
               
              }}
            />
          }
          labelPlacement="end"
          
          
        />
        <FormLabel sx={{ 
          color:'White',
          fontSize:'1rem',
          fontFamily:`sans-serif`,
          
          marginLeft:'5px',
          
          }}>{label}</FormLabel>
      </FormControl>
    </div>
  );
};

export default CheckboxProton;

import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './shortby.css'


export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className='short_by'>
        <h4 className='H4'>Sort By:</h4>
        
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        height:'40px',
        
      }}
    >
      <ToggleButton  value="web">Recommended Lowest Price</ToggleButton>
      {/* <ToggleButton 
       value="android">Lowest Price</ToggleButton>
      <ToggleButton 
      value="ios">Highest Rating</ToggleButton> */}
    
    </ToggleButtonGroup>
    </div>
  );
}
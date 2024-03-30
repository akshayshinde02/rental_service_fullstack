import React from 'react';
//import { categoryList, ratingList } from '../../../constants';
import { AnimatePresence, motion } from "framer-motion";
import CheckboxProton from '../common/CheckboxProton';
import './filterpanel.css'
import SliderProton from '../common/SliderProton';
import Typography from '@mui/material/Typography';
const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.3,
    },
  },
};
const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className='input-group'>
    <AnimatePresence>
    <motion.h1
                 variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
    <Typography gutterBottom>Price Range</Typography>
                 
    </motion.h1>
    </AnimatePresence>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    
    <div className='input-group'>
      <p className='label'>Truck Types</p>
      <hr className='Hr'/>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
    </div>
  </div>
);

export default FilterPanel;

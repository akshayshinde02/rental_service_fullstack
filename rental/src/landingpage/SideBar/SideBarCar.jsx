//import { NavLink } from "react-router-dom";
//import { FaBars, FaLock,FaUser, FaImage } from "react-icons/fa";
//import { MdMessage } from "react-icons/md";
import {  BiSearch } from "react-icons/bi";
//import { BiCog } from "react-icons/bi";
//import { AiFillHeart } from "react-icons/ai";
//import { BsCartCheck } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterPanel from '../FilterPanel/FilterPanel'
import { dataListCar } from "../../datalistcars";




const SideBarCar = ({ children }) => {
  const [isOpen] = useState(true);
 
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "210px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  // const showAnimation = {
  //   hidden: {
  //     width: 0,
  //     opacity: 0,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  //   show: {
  //     opacity: 1,
  //     width: "auto",
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'Car 1' },
    { id: 2, checked: false, label: 'Car 2' },
    { id: 3, checked: false, label: 'Car 3' },
    { id: 4, checked: false, label: 'Car 4' },
    { id: 5, checked: false, label: 'Car 5' },
    { id: 6, checked: false, label: 'Car 6' },
  ]);
  const [list, setList] = useState(dataListCar);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };
  //Price
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataListCar;

    
  

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    setList(updatedList);
   
  };
  useEffect(() => {
    applyFilters();
  }, [cuisines]);
  

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width:isOpen? "280px":"45px",
            height:"325vh",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 8,
            },
          }}
          className={`sidebar `}
        >
            
          
          {<div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> }
         

          <section>
        {<div className="filter">
              <FilterPanel
           selectedPrice={selectedPrice}
           changePrice={handleChangePrice}
           cuisines={cuisines}
           changeChecked={handleChangeChecked} />
              </div>}
        </section>
          
          
        </motion.div>
        
       

        <main>{children}</main>
        
     
      </div>
    </>
  );
};

export default SideBarCar;
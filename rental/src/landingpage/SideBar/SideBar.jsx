//import { NavLink } from "react-router-dom";
import { FaBars, } from "react-icons/fa";
//import { MdMessage } from "react-icons/md";
import {  BiSearch } from "react-icons/bi";
//import { BiCog } from "react-icons/bi";
//import { AiFillHeart } from "react-icons/ai";
//import { BsCartCheck } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterPanel from '../remaining_addon/FilterPanel'
import { dataList } from "../remaining_addon/datalist";
import '../SideBar/sidebar.css'



const SideBar = ({ children }) => {
  const [isOpen,setIsOpen] = useState(true);
 
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

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: '3/4 Ton Pickup Truck' },
    { id: 2, checked: false, label: '1 Ton Pickup Truck' },
    { id: 3, checked: false, label: 'Standard Pickup' },
    { id: 4, checked: false, label: '1/2 Ton Pickup Truck' },
    { id: 5, checked: false, label: '26 Moving Truck' },
    { id: 6, checked: false, label: 'Ton Pickup Truck' },
  ]);
  const [list, setList] = useState(dataList);

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
    let updatedList = dataList;

    
  

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

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const isMobile = window.innerWidth <= 768;
  

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width:isOpen? "280px":"45px",
            height:isMobile ?'100vh':"325vh",
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

{isMobile && (
            <div className="toggle-button" onClick={handleToggleSidebar}>
              <FaBars/>
            </div>
          )}
            </AnimatePresence>
          </div> }
         

          <section>
        {<div className="filter">
              <FilterPanel
           selectedPrice={selectedPrice}
           changePrice={handleChangePrice}
           cuisines={cuisines}
           changeChecked={handleChangeChecked}
           />
        </div>}
        </section>
          
          
        </motion.div>
        
       

        <main>{children}</main>
        
     
      </div>
    </>
  );
};

export default SideBar;
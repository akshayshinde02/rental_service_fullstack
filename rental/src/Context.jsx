import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [senderZip, setSenderZip] = useState("");
  const [receiverZip, setReceiverZip] = useState("");
  const [typeOfCourier, setTypeOfCourier] = useState();
  const [weight, setWeight] = useState();
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [value, setValue] = useState();
  const [content, setContent] = useState();
  const [paid, setPaid] = useState();
  const [serviceType, setServiceType] = useState();
  const [riskSurcharge, setRiskSurcharge] = useState();
  const [bookingOption, setBookingOption] = useState();
  const [parcelImage, setParcelImage] = useState();
  const [pickUpDate, setPickUpDate] = useState();
  const [cost, setCost] = useState();
  const [serviceClass, setServiceClass] = useState();
  const [o_address, setOAddress] = useState();
  const [d_address, setDAddress] = useState();
  const [availableServices, setAvailableServices] = useState([]);
  const [localServices, setLocalServices] = useState([]);
  const [vendor, setVendor] = useState();
  const [service, setService] = useState();
  const [step, setStep] = useState();
  const[vendors, setVendors] = useState([]);
  
  
  
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');// Truck or Car
  const [age, setage] = useState('');

  // Rental Details
  const [mainrental,setmainrental] = useState();        // Buget / Enterprise
  const [subservicename,setsubservicename] = useState();   // Subservice
  // const [rentalservicetype,setrentalservicetype] = useState();  // Truck or Car
  const [rentalvehical,setrentalvehical] = useState();        // PickUp
  const [modelType,setmodelType] = useState();        // 3/4 PickUp
  const [rentalprice,setrentalprice] = useState();        // Price of Rental
  const [rentalquantity,setrentalquantity] = useState();        // Quantity of Rental
  
  // Saving Date And Time Place
  const [rentalplace,setrentalplace] = useState();
  const [retnaltime,setrentaltime] = useState();
  const [retnaldate,setretnaldate] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        step,
        setStep,
        user,
        setUser,
        senderZip,
        setSenderZip,
        receiverZip,
        setReceiverZip,
        typeOfCourier,
        setTypeOfCourier,
        weight,
        setWeight,
        length,
        setLength,
        height,
        setHeight,
        width,
        setWidth,
        value,
        setValue,
        content,
        setContent,
        paid,
        setPaid,
        riskSurcharge,
        setRiskSurcharge,
        serviceType,
        setServiceType,
        bookingOption,
        setBookingOption,
        parcelImage,
        setParcelImage,
        pickUpDate,
        setPickUpDate,
        cost,
        setCost,
        serviceClass,
        setServiceClass,
        o_address,
        setOAddress,
        d_address,
        setDAddress,
        availableServices,
        setAvailableServices,
        localServices,
        setLocalServices,
        service,
        setService,
        vendor,
        setVendor,
        category,
        setCategory,
        subCategory,
        setSubCategory,
        age,
        setage,
        vendors, 
        setVendors,
        mainrental,
        setmainrental,
        subservicename,
        setsubservicename,
        // rentalservicetype,
        // setrentalservicetype,
        rentalvehical,
        setrentalvehical,
        modelType,
        setmodelType,
        rentalprice,
        setrentalprice,
        rentalquantity,
        setrentalquantity,
        rentalplace,
        setrentalplace,
        retnaltime,
        setrentaltime,
        retnaldate,
        setretnaldate

      }}>
      {children}
    </OrderContext.Provider>
  );
};

export const OrderState = () => {
  return useContext(OrderContext);
};

export default Context;
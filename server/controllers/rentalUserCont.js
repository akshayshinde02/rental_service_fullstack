// const generateToken = require("../config/generateToken");
// const User = require("../models/userModel");
// const OTP = require("../models/otp");
// const generateOTP = require("../config/generateOTP");
// const sendEmail = require("../utils/sendEmail");
const Rental = require("../models/rentaluser")

// exports.registerUser = async (req, res) => {
//   // console.log(req);
//   try {
//     const { 
//         senderZip,
//         returnToSameLocation,
//         receiverZip,
//         vehicle,
//         startDate,
//         endData,
//         pickUpTime,
//         returnTime,
//         renterAge,
//         model,
//         serviceId,
//         noOfVehicles,
//         locationSelected,
        
//         name, 
//         email, 
//         mobileNumber,
    
//     } = req.body;

//     if (!password || !email) {
//       res.status(500).json({
//         message: "please fill all the details",
//       });
//       return;
//     }

//     const isAlreadyExists = await User.findOne({ email: email });
//     if (isAlreadyExists) {
//       res.json({
//         message: "user already exists",
//       });
//       return;
//     }

//     const user = await User.create(req.body);

//     const createdUser = await User.findOne({ _id: user._id }).select(
//       "-password"
//     );
//     console.log(createdUser);

//     res.status(200).json({
//       message: "user is created successfully",
//       createdUser,
//       token: generateToken(createdUser._id),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.userLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email: email });

//     if (user && (await user.matchPassword(password))) {
//       res.status(200).json({
//         message: "success",
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           mobileNumber: user.mobileNumber,
//           address: user.address,
//           username: user.username,
//           alternativeMobileNumber: user.alternativeMobileNumber,
//           createdAt: user.createdAt,
//           token: generateToken(user._id),
//         },
//       });
//     } else {
//       res.status(500).json({
//         message: "invalid credentials",
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.sendOTP = async (req, res) => {
//   const { email, subject, message, duration } = req.body;

//   const isAlreadyExists = await User.findOne({ email: email });
//   if (!isAlreadyExists) {
//     res.json({
//       message: "user does not exists, sign up first",
//     });
//     return;
//   }
//   try {
//     if (!(email && message && subject)) {
//       throw Error("provide all values");
//     }

//     await OTP.deleteOne({ email });

//     const generatedOTP = await generateOTP();

//     const mailOptions = {
//       from: "suradeshivamshyam@hotmail.com",
//       to: email,
//       subject,
//       html: `${message} <b>${generatedOTP}</b> ${duration}`,
//     };

//     await sendEmail(mailOptions);

//     const newOTP = await OTP.create({
//       email,
//       otp: generatedOTP,
//       createdAt: Date.now(),
//       expiresAt: Date.now() + 3600000 * +duration,
//     });

//     res.json(newOTP);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.verifyOTP = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     if (!email || !otp) {
//       throw Error("provide all data");
//     }

//     const userOTP = await OTP.findOne({ email });
//     if (userOTP.expiresAt < Date.now()) {
//       throw Error("token expired, generate new otp");
//     }
//     if (userOTP.otp === otp) {
//       const user = await User.findOne({ email });
//       res.json(user);
//     } else {
//       throw Error("otp does not match");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };







// Rental Controllers

// Create the Rental Order Controller
exports.createRentalOrder = async(req,res)=>{

  try{
    const newOrder = new Rental(req.body);
    const saveOrder = await newOrder.save();
    res.status(201).json(saveOrder);
  } catch(error){
    res.status(400).json({error: error.message});
  }
}

// Get all the Rental Order

exports.getAllOrder = async(req,res)=>{
    try{
      const getOrders = await Rental.find();
      res.status(200).json(getOrders);
    }catch(error){
      res.status(400).json({error: error.message})
    }
};

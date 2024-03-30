const express = require('express')
// const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const connectDB = require("./config/db")
const userRouter = require("./routes/rentalRoutes");
const cors = require('cors')

connectDB();
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/user/",userRouter)

// mongoose.connect("mongodb://localhost:27017/rental").then(()=>{
//     console.log("Connected")
// }).catch((err)=>{
//     console.log(err);
// })

app.use(bodyParser.urlencoded({extended:false}));

// const rental_service = new mongoose.Schema({
    
// })

// const Rental = new mongoose.model("RentalDetails",rental_service)

// app.post("api/v1/addrental",async(req,res)=>{
//     const rent = await Rental.create(req.body);

//     res.status(200).json({
//         success:true,
//         rent
//     })
// })

// app.get("/api/v1/getrentals",async(req,res)=>{

//     const rent = await Rental.find();

//     res.status(200).json({success:true,rent});
// })


app.listen(4000,()=>{
    console.log("server is working")
})
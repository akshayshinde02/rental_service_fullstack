const RentalVendor = require("../models/rentalvendor")

exports.createRentalVendor = async(req,res)=>{
    try{
        const rentalVendor = new RentalVendor(req.body);
        const saveVendor = await rentalVendor.save();
        res.status(201).json(saveVendor);
    }catch(error){
        res.status(400).json({error: error.message});
    };
}

exports.getAllVendors = async(req,res)=>{
    try {
        const vendors = await RentalVendor.find();
        res.status(200).json(vendors);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
};

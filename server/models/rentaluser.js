const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  senderZip: {
    type: Number,
    required: [true, "please enter sender zip code"],
  },
  returnToSameLocation: {
    type: Boolean,
    default: false,
  },
  receiverZip: {
    type: Number,
    required: function () {
      return !this.returnToSameLocation;
    },
  },
  vehicle: {
    type: String,
    enum: ["car", "truck"],
    required: [true, "please select vehicle type"],
  },
  startDate: {
    type: Date,
    required: [true, "Please select start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Please select end date"],
  },
  pickUpTime: {
    type: Date,
    required: [true, "Please select pickup time"],
  },
  returnTime: {
    type: Date,
    required: [true, "Please select return time"],
  },
  renterAge: {
    type: Number,
    enum: ["25+", "18-20", "21-24"],
    required: [true, "Please select Age"],
  },
  model: {
    type: String,
    required: true,
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  serviceId: {
    type: Number,
    required: [true, "Please select service"],
  },
  noOfVehicles: {
    type: Number,
    default: 1,
  },
  locationSelected: {
    type: String,
    required: [true, "Please select location"],
  },
  addons: [
    {
      type: Number,
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  driverInfo: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
  },
  payment: {
    type: Boolean,
    default: false,
  },
  isCanceled: {
    type: Boolean,
    default: false,
  },
  cancelReason: {
    type: String,
    enum: [
      "Truck No Longer Needed",
      "Poor Service",
      "Date Changed",
      "Found Better Option",
    ],
    required: function () {
      return this.isCanceled === true;
    },
  },
});

module.exports = mongoose.model("Rental", rentalSchema); 
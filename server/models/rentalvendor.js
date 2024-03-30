const mongoose = require("mongoose");

const rentalVendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is not provided"],
    // unique: true,
  },
  logo: {
    type: String,
  },
  locations: [
    {
      type: String,
      required: true,
    },
  ],
  services: [
    {
      serviceId: {
        type: Number,
        required: true,
      },
      serviceType: {
        type: String,
        enum: ["Cars", "Trucks"],
        required: true,
      },
      subservicename: {
        type: String,
        required: [true, "name is not provided"],
      },
      rentalvehical: {
        type: String,
        required: [true, "name is not provided"],
      },

      modelType: {
        type: String,
        required: [true, "service type is not provided"],
        // enum: function () {
        //   if (this.serviceType === "car") {
        //     return [
        //       "small",
        //       "medium",
        //       "suv",
        //       "van",
        //       "large",
        //       "luxury-vans",
        //       "convertibles",
        //     ];
        //   } else {
        //     return [
        //       "pickup",
        //       "cargo",
        //       "box",
        //       "stakebed",
        //       "flatbed",
        //       "refrigerated",
        //     ]; 
        //   }
        // },
        enum:{
          values:["small", "medium", "suv", "van", "large", "luxury-vans", "convertibles", "3/4 PickUp Truck","1 Ton PickUp Truck", "cargo", "box", "stakebed", "flatbed", "refrigerated"],
          message: "Invalid modelType for the given serviceType",
        }
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      images: [
        {
          type: String,
          required: true,
        },
      ],
      reviews: [
        {
          personname:{
            type: String,
          },
          rating: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
            required: true,
          },
          description: {
            type: String,
          },
        },
      ],
      cancelable: {
        type: String,
        default: false,
      },
      stock: {
        type: Number,
        required: true,
        default: 1,
      },
      rate: {
        type: Number,
      },
      features: {
        ac: {
          type: Boolean,
          default: false,
        },
        radio: {
          type: Boolean,
          default: false,
        },
      },
      addons: {
        ferniturePad: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        handTruck: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        truckPad: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      },
      labourPickup: {
        id: {
          type: Number,
          required:true,
        },
        available: {
          type: Boolean,
          default: false,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
      carAddon: {
        booster: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        todler: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        infant: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      },
      toing: {
        towDolly: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        carCarrier: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      },
      trailer: {
        cargo4x8: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        cargo5x8: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        cargo6x12: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        utility5x9: {
          id: {
            type: Number,
            required:true,
          },
          available: {
            type: Boolean,
            default: false,
          },
          quantity: {
            type: Number,
            default: 1,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      },
    },
  ],
  workingDays: [
    {
      mon_fri: {
        type: Boolean,
        default: false,
      },
      sat: {
        type: Boolean,
        default: false,
      },
      sun: {
        type: Boolean,
        default: false,
      },
    },
  ],
  workingTime: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  taxes: {
    environment: {
      cost: {
        type: Number,
        required: true,
      },
    },
    sales: {
      cost: {
        type: Number,
        required: true,
      },
    },
    costRecovery: {
      cost: {
        type: Number,
        required: true,
      },
    },
    energyRecovery: {
      cost: {
        type: Number,
        required: true,
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("rentalVendor", rentalVendorSchema);
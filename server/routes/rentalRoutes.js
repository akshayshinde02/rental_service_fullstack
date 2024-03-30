const express = require("express")
const router = express.Router();
const rentalOrderController = require('../controllers/rentalUserCont');
const rentalVendorController = require('../controllers/rentalVendorCont')

// Orders
router.post('/rentals',rentalOrderController.createRentalOrder);
router.get('/rentals',rentalOrderController.getAllOrder);

// Vendors
router.post('/vendors',rentalVendorController.createRentalVendor);
router.get('/vendors',rentalVendorController.getAllVendors);

module.exports = router
const express = require('express');
const router = express.Router();
const { getDonations, addDonation } = require('../controllers/donationController'); // Ensure these are correctly imported

// Define your routes
router.get('/donations', getDonations);   // Example of a GET route
router.post('/donations', addDonation);   // Example of a POST route

module.exports = router;

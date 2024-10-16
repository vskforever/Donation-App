const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController'); // Ensure these are correctly imported

// Define your routes
router.post('/register', registerUser);  // Make sure registerUser is defined
router.post('/login', loginUser);        // Make sure loginUser is defined

module.exports = router;

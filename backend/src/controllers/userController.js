 // userController.js

const User = require('../models/User'); // Ensure you have a User model defined

// Function to handle user registration
const registerUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to handle user login
const loginUser = async (req, res) => {
    // Add your login logic here
};

// Export the functions
module.exports = {
    registerUser,
    loginUser,
};

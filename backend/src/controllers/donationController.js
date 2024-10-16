 // donationController.js

const Donation = require('../models/Donation');

// Function to handle adding a donation
const addDonation = async (req, res) => {
    try {
        const newDonation = new Donation(req.body);
        await newDonation.save();
        res.status(201).json(newDonation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to handle getting donations
const getDonations = async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getDonations,
    addDonation,
};

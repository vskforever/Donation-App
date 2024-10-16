const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Use the MONGODB_URI environment variable
const uri = "mongodb+srv://khokharvsk:KvikasK8987@innerbhakti.sr9yf.mongodb.net/innerbhakti?retryWrites=true&w=majority";
  

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;

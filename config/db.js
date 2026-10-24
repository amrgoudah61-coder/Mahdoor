const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        // console.log();

        await mongoose.connect(process.env.MONG_URL);
        console.log("MongoDB connected ✅");
    } catch (err) {
        console.log("connected to database has failed ❌", err);

    }
};

module.exports = { connectDB };

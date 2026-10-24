const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    brand: { type: String, required: true, minlength: 3, maxlength: 50 },
    branchNumber: { type: Number, required: true, min: 0 },
    location: { type: String, required: true, minlength: 3, maxlength: 50 },
}, { timestamps: true })

const restaurantModel = mongoose.model('Restaurant', restaurantSchema)
module.exports = { restaurantModel }
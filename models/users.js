const mongoose = require('mongoose')
const joi = require('joi')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    email: { type: String, maxlength: 200, required: true, unique: true },
    password: { type: String, minlength: 6, maxlength: 200, required: true },
    restaurant_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    role: {
        type: String
        , enum: ["staff", "manager"], default: "staff"
    }, isActive: { type: Boolean, default: true }, // For cancellation instead of permanent deletion
    isEmailVerifified: { type: Boolean, default: false },
    emailOtp: { type: String, default: null },
    emailOtpExpires: { type: Date, default: null }
}, { timestamps: true })

const validateSignupUser = function (obj) {
    const schema = joi.object({
        name: joi.string().trim().min(3).max(200).required(),
        age: joi.number().required(),
        gender: joi.string().required(),
        email: joi.string().trim().required().email(),
        password: joi.string().trim().required().max(200).min(6),
        restaurant_Id: joi.string().trim(),
        role: joi.string().trim()
    })
    return schema.validate(obj)
}
const validateLoginUser = function (obj) {
    const schema = joi.object({
        email: joi.string().trim().required().email(),
        password: joi.string().trim().required().max(200).min(6),
    })
    return schema.validate(obj)
}

const validateUpdateUser = function (obj) {
    const schema = joi.object({
        name: joi.string().trim().min(3).max(200),
        age: joi.number(),
        gender: joi.string(),
        email: joi.string().trim().email(),
        password: joi.string().trim().max(200).min(6),
        restaurant_Id: joi.string().trim(),
        role: joi.string().trim()
    })
    return schema.validate(obj)
}




const userModel = mongoose.model('User', userSchema)
module.exports = { userModel, validateSignupUser, validateLoginUser, validateUpdateUser }
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    unit: { type: String, required: true }, // kg, liter, piece, etc.
    unitCost: {   // cost per unit
        type: Number,
        required: true,
        min: [0.01, 'Cost must be greater than 0']
    },
    yield: {  //  النسبه المستخدمه فعليا في الطبخ 
        type: Number,
        required: true,
        min: [1, 'Yield must be between 1 and 100'],
        max: [100, 'Yield must be between 1 and 100'],
        default: 100
    },
    shelfLife: {  // مده الصلاحيه  by day 
        type: Number,
        required: true,
        min: [1, 'Shelf life must be at least 1 day']
    },
    preferredVendor: {  // الموردون 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        default: null
    },
    leadTime: {  // مدة الوصول للمخزن بعد الطلب
        type: Number,
        default: 0,
        min: [0, 'Lead time cannot be negative']
    },
    isActive: { type: Boolean, default: true }, // For cancellation instead of permanent deletion
    restaurant_Id: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Ingredient', ingredientSchema);
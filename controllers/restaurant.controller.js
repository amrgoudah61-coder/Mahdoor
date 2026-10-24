const asyncHandler = require('express-async-handler');
const { restaurantModel } = require('../models/restaurant');

// CREATE restaurant
const createRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await restaurantModel.create(req.body);

    return res.status(201).json({
        success: true,
        data: restaurant
    });
});

// READ all restaurants
const getAllRestaurants = asyncHandler(async (req, res) => {
    const restaurants = await restaurantModel.find();
    if (!restaurants) {
        return res.status(404).json({ success: false, msg: "restaurants not found " })
    }
    return res.status(200).json({
        success: true,
        results: restaurants.length,
        data: restaurants
    });
});

// READ one restaurant
const getRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await restaurantModel.findById(req.params.id);

    if (!restaurant) {
        return res.status(404).json({
            success: false,
            message: 'Restaurant not found'
        });
    }

    return res.status(200).json({
        success: true,
        data: restaurant
    });
});

// UPDATE restaurant
const updateRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await restaurantModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    if (!restaurant) {
        return res.status(404).json({
            success: false,
            message: 'Restaurant not found'
        });
    }

    return res.status(200).json({
        success: true,
        data: restaurant
    });
});

// DELETE restaurant
const deleteRestaurant = asyncHandler(async (req, res) => {
    const restaurant = await restaurantModel.findByIdAndDelete(
        req.params.id
    );

    if (!restaurant) {
        return res.status(404).json({
            success: false,
            message: 'Restaurant not found'
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Restaurant deleted successfully',
        data: restaurant
    });
});

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getRestaurant,
    updateRestaurant,
    deleteRestaurant
};
const { userModel, validateSignupUser, validateUpdateUser } = require('../models/users');
const asyncHandler = require('express-async-handler');

// create user by manager

const createStaffUser = asyncHandler(async (req, res) => {
    const {
        name,
        age,
        gender,
        email,
        password,
        restaurant_Id,
        role,
    } = req.body;
    const { error } = validateSignupUser(req.body)
    if (error) {
        return res.status(400).json({ success: false, msg: error.details[0].message })
    }

    const user = await userModel.create({
        name,
        age,
        gender,
        email,
        password,
        restaurant_Id,
        role
    });

    return res.status(201).json({
        success: true,
        data: user
    });
});


// get users
const getStaffUsers = asyncHandler(async (req, res) => {
    const { restaurant_Id } = req.query;
    const query = {}
    if (restaurant_Id) query.restaurant_Id = restaurant_Id;

    const user = await userModel.find(query)

    return res.status(200).json({
        success: true,
        count: user.length,
        data: user
    });
});


// update user 


const updateStaffUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {
        name,
        age,
        gender,
        email,
        password,
        restaurant_Id,
        role,
    } = req.body;

    const { error } = validateUpdateUser(req.body)
    if (error) {
        return res.status(400).json({ success: false, msg: error.details[0].message })
    }

    const user = await userModel.findByIdAndUpdate(id, req.body, {
        new: true
    })

    if (!user) {
        return res.status(404).json({ success: false, msg: 'user not found' });
    }

    return res.status(200).json({
        success: true,
        data: user
    });
});



// deactive user by manager

const deactivateStaffUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await userModel.findByIdAndUpdate(
        id,
        { isActive: false },
        { new: true }
    );

    if (!user) {
        return res.status(404).json({ success: false, msg: 'user not found' });
    }

    return res.status(200).json({
        success: true,
        msg: 'user deactivated successfully',
        data: user
    });
});

module.exports = { getStaffUsers, createStaffUser, updateStaffUser, deactivateStaffUser }
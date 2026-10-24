const express = require('express')
const router = express.Router()
const { createRestaurant, getRestaurant, deleteRestaurant, updateRestaurant, getAllRestaurants } = require('../controllers/restaurant.controller')

router.route('/').post(createRestaurant).get(getAllRestaurants)
router.route('/:id').get(getRestaurant).put(updateRestaurant).delete(deleteRestaurant)

module.exports = router

const express = require('express')
const router = express.Router()
const { createStaffUser, getStaffUsers, updateStaffUser, deactivateStaffUser } = require('../controllers/staff.controller')

router.post('/', createStaffUser);
router.get('/', getStaffUsers);
router.put('/:id', updateStaffUser);
router.patch('/:id/deactivate', deactivateStaffUser); // To deactivate instead of delete

module.exports = router
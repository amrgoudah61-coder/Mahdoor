const express = require('express');
const router = express.Router();
const {
    createVendor,
    getVendors,
    getVendorDetails,
    updateVendor,
    deleteVendor
} = require('../controllers/vendor.controller');

router.post('/', createVendor);
router.get('/', getVendors);
router.get('/:id', getVendorDetails); //Endpoint to retrieve supplier details along with their components
router.put('/:id', updateVendor).delete('/:id', deleteVendor)   // Supplier Data Update Endpoint

module.exports = router;
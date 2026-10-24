const express = require('express');
const router = express.Router();
const {
    createBatch,
    getIngredientBatchesAndStock,
    updateBatch,
    cancelBatch,
    markBatchAsReceived,
    updateReceivedBatch
} = require('../controllers/batch.controller');

router.post('/', createBatch); // Adding a new batch
router.get('/ingredient/:ingredientId', getIngredientBatchesAndStock); // Retrieving batches and stock
router.put('/:id', updateBatch); // Update an upcoming batch
router.put('/:id', updateReceivedBatch); // Update an received batch
router.patch('/:id/cancel', cancelBatch); // Cancel an upcoming batch
router.patch('/:id/receive', markBatchAsReceived); // Mark an upcoming batch as received

module.exports = router;
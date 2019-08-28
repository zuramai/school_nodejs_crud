const express = require('express');
const router = express.Router();

// CONTROLLERS
const MapelController = require('../controllers/MapelController');

// API CRUD BARANG
router.get('/', MapelController.index);
router.get('/:id', MapelController.detail);
router.post('/', MapelController.store);
router.put('/:id', MapelController.update);
router.delete('/:id', MapelController.destroy);

module.exports = router;
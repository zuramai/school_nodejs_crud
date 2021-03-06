const express = require('express');
const router = express.Router();

// CONTROLLERS
const BarangController = require('../controllers/BarangController');

// API CRUD BARANG
router.get('/', BarangController.index);
router.get('/:id', BarangController.detail);
router.post('/', BarangController.store);
router.put('/:id', BarangController.update);
router.delete('/:id', BarangController.destroy);

module.exports = router;
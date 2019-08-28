const express = require('express');
const router = express.Router();

// CONTROLLERS
const RuanganController = require('../controllers/RuanganController');

// API CRUD BARANG
router.get('/', RuanganController.index);
router.get('/:id', RuanganController.detail);
router.post('/', RuanganController.store);
router.put('/:id', RuanganController.update);
router.delete('/:id', RuanganController.destroy);

module.exports = router;
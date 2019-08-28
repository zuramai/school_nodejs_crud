const express = require('express');
const router = express.Router();

// CONTROLLERS
const TugasController = require('../controllers/TugasController');

// API CRUD BARANG
router.get('/', TugasController.index);
router.get('/:id', TugasController.detail);
router.post('/', TugasController.store);
router.put('/:id', TugasController.update);
router.delete('/:id', TugasController.destroy);

module.exports = router;
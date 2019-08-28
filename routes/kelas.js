const express = require('express');
const router = express.Router();

// CONTROLLERS
const KelasController = require('./controllers/KelasController');

// API CRUD BARANG
router.get('/', KelasController.index);
router.get('/:id', KelasController.detail);
router.post('/', KelasController.store);
router.put('/:id', KelasController.update);
router.delete('/:id', KelasController.destroy);

module.exports = router;
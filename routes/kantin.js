const express = require('express');
const router = express.Router();

// CONTROLLERS
const KantinController = require('./controllers/KantinController');

// API CRUD BARANG
router.get('/', KantinController.index);
router.get('/:id', KantinController.detail);
router.post('/', KantinController.store);
router.put('/:id', KantinController.update);
router.delete('/:id', KantinController.destroy);

module.exports = router;
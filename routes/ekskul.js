const express = require('express');
const router = express.Router();

// CONTROLLERS
const EkskulController = require('../controllers/EkskulController');

// API CRUD BARANG
router.get('/', EkskulController.index);
router.get('/:id', EkskulController.detail);
router.post('/', EkskulController.store);
router.put('/:id', EkskulController.update);
router.delete('/:id', EkskulController.destroy);

module.exports = router;
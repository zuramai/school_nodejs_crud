const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const BarangController = require('./controllers/BarangController');
=======
const BarangController = require('../controllers/BarangController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD BARANG
router.get('/', BarangController.index);
router.get('/:id', BarangController.detail);
router.post('/', BarangController.store);
router.put('/:id', BarangController.update);
router.delete('/:id', BarangController.destroy);

module.exports = router;
const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const RuanganController = require('./controllers/RuanganController');
=======
const RuanganController = require('../controllers/RuanganController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD BARANG
router.get('/', RuanganController.index);
router.get('/:id', RuanganController.detail);
router.post('/', RuanganController.store);
router.put('/:id', RuanganController.update);
router.delete('/:id', RuanganController.destroy);

module.exports = router;
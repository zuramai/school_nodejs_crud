const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const MapelController = require('./controllers/MapelController');
=======
const MapelController = require('../controllers/MapelController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD BARANG
router.get('/', MapelController.index);
router.get('/:id', MapelController.detail);
router.post('/', MapelController.store);
router.put('/:id', MapelController.update);
router.delete('/:id', MapelController.destroy);

module.exports = router;
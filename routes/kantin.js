const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const KantinController = require('./controllers/KantinController');
=======
const KantinController = require('../controllers/KantinController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD BARANG
router.get('/', KantinController.index);
router.get('/:id', KantinController.detail);
router.post('/', KantinController.store);
router.put('/:id', KantinController.update);
router.delete('/:id', KantinController.destroy);

module.exports = router;
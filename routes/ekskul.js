const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const EkskulController = require('./controllers/EkskulController');
=======
const EkskulController = require('../controllers/EkskulController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD BARANG
router.get('/', EkskulController.index);
router.get('/:id', EkskulController.detail);
router.post('/', EkskulController.store);
router.put('/:id', EkskulController.update);
router.delete('/:id', EkskulController.destroy);

module.exports = router;
const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const KelasController = require('./controllers/KelasController');
=======
const KelasController = require('../controllers/KelasController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD BARANG
router.get('/', KelasController.index);
router.get('/:id', KelasController.detail);
router.post('/', KelasController.store);
router.put('/:id', KelasController.update);
router.delete('/:id', KelasController.destroy);

module.exports = router;
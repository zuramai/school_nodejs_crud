const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const TugasController = require('./controllers/TugasController');
=======
const TugasController = require('../controllers/TugasController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD BARANG
router.get('/', TugasController.index);
router.get('/:id', TugasController.detail);
router.post('/', TugasController.store);
router.put('/:id', TugasController.update);
router.delete('/:id', TugasController.destroy);

module.exports = router;
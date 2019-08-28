const express = require('express');
const router = express.Router();

// CONTROLLERS
<<<<<<< HEAD
const UserController = require('./controllers/UserController');
=======
const UserController = require('../controllers/UserController');
>>>>>>> b24525d71245365ec8bbbd9e82cc3f33083de105

// API CRUD USER
router.get('/api/user', UserController.index);
router.get('/api/user/:id', UserController.detail);
router.post('/api/user', UserController.store);
router.put('/api/user/:id', UserController.update);
router.delete('/api/user/:id', UserController.destroy);

module.exports = router;
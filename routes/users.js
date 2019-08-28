const express = require('express');
const router = express.Router();

// CONTROLLERS
const UserController = require('./controllers/UserController');

// API CRUD USER
router.get('/api/user', UserController.index);
router.get('/api/user/:id', UserController.detail);
router.post('/api/user', UserController.store);
router.put('/api/user/:id', UserController.update);
router.delete('/api/user/:id', UserController.destroy);

module.exports = router;
const express = require('express');
const router = express.Router();

// CONTROLLERS
const UserController = require('../controllers/UserController');

// API CRUD USER
router.get('/', UserController.index);
router.get('/:id', UserController.detail);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;
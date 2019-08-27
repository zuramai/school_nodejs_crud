const express = require('express');
const router = express.Router();

// CONTROLLERS
const BarangController = require('./controllers/BarangController');
const EkskulController = require('./controllers/EkskulController');
const KelasController = require('./controllers/KelasController');
const KantinController = require('./controllers/KantinController');
const UserController = require('./controllers/UserController');
const TugasController = require('./controllers/TugasController');
const MapelController = require('./controllers/MapelController');
const RuanganController = require('./controllers/RuanganController');

// API CRUD USER
router.get('/api/user', UserController.index);
router.post('/api/user', UserController.store);
router.put('/api/user/:id', UserController.update);
router.delete('/api/user/:id', UserController.destroy);

// API CRUD BARANG
router.get('/api/barang', BarangController.index);
router.post('/api/barang', BarangController.store);
router.put('/api/barang/:id', BarangController.update);
router.delete('/api/barang/:id', BarangController.destroy);

// API CRUD MATA PELAJARAN
router.get('/api/mapel', MapelController.index);
router.post('/api/mapel', MapelController.store);
router.put('/api/mapel/:id', MapelController.update);
router.delete('/api/mapel/:id', MapelController.destroy);

// API CRUD TUGAS
router.get('/api/tugas', TugasController.index);
router.post('/api/tugas', TugasController.store);
router.put('/api/tugas/:id', TugasController.update);
router.delete('/api/tugas/:id', TugasController.destroy);

// API CRUD KELAS
router.get('/api/kelas', KelasController.index);
router.post('/api/kelas', KelasController.store);
router.put('/api/kelas/:id', KelasController.update);
router.delete('/api/kelas/:id', KelasController.destroy);

// API CRUD RUANGAN
router.get('/api/ruangan', RuanganController.index);
router.post('/api/ruangan', RuanganController.store);
router.put('/api/ruangan/:id', RuanganController.update);
router.delete('/api/ruangan/:id', RuanganController.destroy);

// API CRUD EKSKUL
router.get('/api/ekskul', EkskulController.index);
router.post('/api/ekskul', EkskulController.store);
router.put('/api/ekskul/:id', EkskulController.update);
router.delete('/api/ekskul/:id', EkskulController.destroy);

// API CRUD KANTIN
router.get('/api/kantin', KantinController.index);
router.post('/api/kantin', KantinController.store);
router.put('/api/kantin/:id', KantinController.update);
router.delete('/api/kantin/:id', KantinController.destroy);

module.exports = router;
const express = require('express');
const app = express();
const PORT = 3000;

const UserRoutes = require('./routes/users');
const BarangRoutes = require('./routes/barang');
const EkskulRoutes = require('./routes/ekskul');
const KantinRoutes = require('./routes/kantin');
const KelasRoutes = require('./routes/kelas');
const MapelRoutes = require('./routes/mapel');
const RuanganRoutes = require('./routes/ruangan');
const TugasRoutes = require('./routes/tugas');

app.use('/api/users', UserRoutes);
app.use('/api/barang', BarangRoutes);
app.use('/api/ekskul', EkskulRoutes);
app.use('/api/kantin', KantinRoutes);
app.use('/api/kelas', KelasRoutes);
app.use('/api/ruangan', RuanganRoutes);
app.use('/api/tugas', TugasRoutes);
app.use('/api/mapel', MapelRoutes);

app.listen(PORT, () => console.log("App running on port "+PORT));
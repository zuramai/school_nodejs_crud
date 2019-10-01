let db = require('./../config/connection');

exports.index = (req, res) => {
	db.query("SELECT tugas.id, tugas.judul, tugas.deskripsi, tugas.kelas_id, tugas.mapel_id, kelas.nama as nama_kelas, mapel.nama as nama_mapel, kelas.lokasi FROM tugas INNER JOIN kelas ON tugas.kelas_id = kelas.id, mapel.lokasi FROM tugas INNER JOIN mapel ON tugas.mapel_id = mapel.id", (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.detail = (req, res) => {
	db.query("SELECT tugas.id, tugas.judul, tugas.deskripsi, tugas.kelas_id, tugas.mapel_id, kelas.nama as nama_kelas, mapel.nama as nama_mapel, kelas.lokasi FROM users INNER JOIN kelas ON tugas.kelas_id = kelas.id, mapel.lokasi FROM tugas INNER JOIN mapel ON tugas.mapel_id = mapel.id WHERE tugas.id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})	
	})
}

exports.store = (req, res) => {
	let tugas = {
		judul: req.body.judul,
		deskripsi: req.body.deskripsi,
		kelas_id: req.body.kelas_id,
		mapel_id: req.body.mapel_id
	}

	db.query("INSERT INTO tugas (judul,deskripsi,kelas_id,mapel_id) VALUES (?,?,?,?)", [tugas.judul, tugas.deskripsi, tugas.kelas_id, tugas.mapel_id], (err, result) => {
		if (err) res.status(500).send({'Error : ': err})
			else res.status(201).send({'Result : ': result})
	})
}

exports.update = (req, res) => {
	let tugas = {
		id: req.params.id,
		judul: req.body.judul,
		deskripsi: req.body.deskripsi,
		kelas_id: req.body.kelas_id,
		mapel_id: req.body.mapel_id
	}

	db.query("UPDATE tugas SET judul=?, deskripsi=?, kelas_id=?,mapel_id=? WHERE id=?", [tugas.judul,tugas.deskripsi,tugas.kelas_id,tugas.mapel_id, tugas.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.destroy = (req, res) => {
	db.query("DELETE FROM tugas WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

let db = require('./../config/connection');

exports.index = (req, res) => {
	db.query("SELECT * FROM tugas", (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.detail = (req, res) => {
	db.query("SELECT * FROM tugas WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})	
	})
}

exports.store = (req, res) => {
	let tugas = {
		judul: req.body.judul,
		deskripsi: req.body.deskripsi
	}

	db.query("INSERT INTO tugas (judul,deskripsi) VALUES (?,?)", [tugas.judul, tugas.deskripsi], (err, result) => {
		if (err) res.status(500).send({'Error : ': err})
			else res.status(201).send({'Result : ': result})
	})
}

exports.update = (req, res) => {
	let tugas = {
		id: req.params.id,
		judul: req.body.judul,
		deskripsi: req.body.deskripsi
	}

	db.query("UPDATE tugas SET judul=?, deskripsi=? WHERE id=?", [tugas.judul,tugas.deskripsi, tugas.id], (err, result) => {
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

let db = require('./../config/connection')

exports.index = (req, res) => {
	db.query("SELECT * FROM kelas", (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.detail = (req, res) => {
	db.query("SELECT * FROM kelas WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})	
	})
}

exports.store = (req, res) => {
	let kelas = {
		nama: req.body.nama,
		lokasi: req.body.lokasi
	}

	db.query("INSERT INTO kelas (nama,lokasi) VALUES (?,?)", [kelas.nama, kelas.lokasi], (err, result) => {
		if (err) res.status(500).send({'Error : ': err})
			else res.status(201).send({'Result : ': result})
	})
}

exports.update = (req, res) => {
	let kelas = {
		id: req.params.id,
		nama: req.body.nama,
		lokasi: req.body.lokasi
	}

	db.query("UPDATE kelas SET nama=?, lokasi=? WHERE id=?", [kelas.nama,kelas.lokasi, kelas.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.destroy = (req, res) => {
	db.query("DELETE FROM kelas WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}
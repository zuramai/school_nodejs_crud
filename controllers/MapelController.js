let db = require('./../config/connection');

exports.index = (req, res) => {
	db.query("SELECT * FROM mapel", (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.detail = (req, res) => {
	db.query("SELECT * FROM mapel WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})	
	})
}

exports.detail = (req,res) => {

}

exports.store = (req, res) => {
	let mapel = {
		nama: req.body.nama
	}

	db.query("INSERT INTO mapel (nama) VALUES (?,?)", [mapel.nama], (err, result) => {
		if (err) res.status(500).send({'Error : ': err})
			else res.status(201).send({'Result : ': result})
	})
}

exports.update = (req, res) => {
	let tugas = {
		id: req.params.id,
		nama: req.body.nama
	}

	db.query("UPDATE mapel SET nama=? WHERE id=?", [mapel.nama, mapel.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.destroy = (req, res) => {
	db.query("DELETE FROM mapel WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}
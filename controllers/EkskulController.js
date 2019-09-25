let db = require('./../config/connection');

exports.index = (req, res) => {
	db.query("SELECT * FROM ekskul", (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.detail = (req, res) => {
	db.query("SELECT * FROM ekskul WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})	
	})
}

exports.store = (req, res) => {
	let ekskul = {
		nama: req.body.nama
	}

	db.query("INSERT INTO ekskul (nama) VALUES (?)", [ekskul.nama], (err, result) => {
		if (err) res.status(500).send({'Error : ': err})
			else res.status(201).send({'Result : ': result})
	})
}

exports.update = (req, res) => {
	let ekskul = {
		id: req.params.id,
		nama: req.body.nama
	}

	db.query("UPDATE ekskul SET nama=? WHERE id=?", [ekskul.nama, ekskul.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}

exports.destroy = (req, res) => {
	db.query("DELETE FROM ekskul WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({'Error : ': err})
			else res.status(200).send({'Result: ': result})
	})
}
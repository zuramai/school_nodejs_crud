let db = require('./../config/connection');

exports.index = (req, res) => {
	db.query("SELECT users.id, users.nama, users.kelas_id, kelas.nama as nama_kelas, kelas.lokasi FROM users INNER JOIN kelas ON users.kelas_id = kelas.id", (err, result) => {
		if (err) res.status(404).send({ 'Error : ': err })
		else res.status(200).send({ 'Result: ': result })
	})
}

exports.detail = (req, res) => {
	db.query("SELECT users.id, users.nama, users.kelas_id, kelas.nama as nama_kelas, kelas.lokasi FROM users INNER JOIN kelas ON users.kelas_id = kelas.id WHERE users.id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({ 'Error : ': err })
		else res.status(200).send({ 'Result: ': result })
	})
}

exports.store = (req, res) => {
	let kelas = {
		nama: req.body.nama,
		kelas_id: req.body.kelas_id
	}

	db.query("INSERT INTO users (nama,kelas_id) VALUES (?,?)", [kelas.nama, kelas.kelas_id], (err, result) => {
		if (err) res.status(500).send({ 'Error : ': err })
		else res.status(201).send({ 'Result : ': result })
	})
}

exports.update = (req, res) => {
	let kelas = {
		id: req.params.id,
		nama: req.body.nama,
		kelas_id: req.body.kelas_id
	}

	db.query("UPDATE users SET nama=?, kelas_id=? WHERE id=?", [kelas.nama, kelas.kelas_id, kelas.id], (err, result) => {
		if (err) res.status(404).send({ 'Error : ': err })
		else res.status(200).send({ 'Result: ': result })
	})
}

exports.destroy = (req, res) => {
	db.query("DELETE FROM users WHERE id=?", [req.params.id], (err, result) => {
		if (err) res.status(404).send({ 'Error : ': err })
		else res.status(200).send({ 'Result: ': result })
	})
}
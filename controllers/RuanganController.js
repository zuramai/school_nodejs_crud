let db = require('./../config/connection');

exports.index = (req, res) => {
    db.query("SELECT * FROM ruangan", (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.detail = (req, res) => {
    db.query("SELECT * FROM ruangan WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.store = (req, res) => {
    let ruangan = {
        nama: req.body.nama,
        lokasi: req.body.lokasi
    }

    db.query("INSERT INTO ruangan (nama,lokasi) VALUES (?,?)", [ruangan.nama, ruangan.lokasi], (err, result) => {
        if (err) res.status(500).send({ 'Error : ': err })
        else res.status(201).send({ 'Result : ': result })
    })
}

exports.update = (req, res) => {
    let ruangan = {
        id: req.params.id,
        nama: req.body.nama,
        lokasi: req.body.lokasi
    }

    db.query("UPDATE ruangan SET nama=?, lokasi=? WHERE id=?", [ruangan.nama, ruangan.lokasi, ruangan.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.destroy = (req, res) => {
    db.query("DELETE FROM ruangan WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}
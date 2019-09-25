let db = require('./../config/connection');

exports.index = (req, res) => {
    db.query("SELECT * FROM kantin", (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.detail = (req, res) => {
    db.query("SELECT * FROM kantin WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.store = (req, res) => {
    let kantin = {
        nama: req.body.nama,
    }

    db.query("INSERT INTO kantin (nama) VALUES (?)", [kantin.nama], (err, result) => {
        if (err) res.status(500).send({ 'Error : ': err })
        else res.status(201).send({ 'Result : ': result })
    })
}

exports.update = (req, res) => {
    let kantin = {
        id: req.params.id,
        nama: req.body.nama,
    }

    db.query("UPDATE kantin SET nama=? WHERE id=?", [kantin.nama, kantin.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.destroy = (req, res) => {
    db.query("DELETE FROM kantin WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}
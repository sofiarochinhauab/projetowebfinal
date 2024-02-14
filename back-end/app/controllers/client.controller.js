const db = require("../models");
const Op = db.Sequelize.Op;
const Client = db.client;

exports.create = (req, res) => {

    return Client.create({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        company: req.body.company,
        due: req.body.due,
        received: req.body.received,
        notes: req.body.notes
    })
        .then(data => {
            res.status(201).send({
                id: data.id,
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                company: data.company,
                due: data.due,
                received: data.received,
                notes: data.notes
            });

            console.log(data.id)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Client."
            });
        });
};

exports.findAll = (req, res) => {
    return Client.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    return Client.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Client with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Client with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Client.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Client was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Client with id=${id}. Maybe Cliente was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Client with id=" + id
            });
        });
};


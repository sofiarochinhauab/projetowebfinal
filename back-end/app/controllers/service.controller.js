const db = require("../models");
const Op = db.Sequelize.Op;
const Service = db.service;

exports.create = (req, res) => {

    return Service.create({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        company: req.body.company,
        country: req.body.country,
        price: req.body.price,
        description: req.body.description
    })
        .then(data => {
            res.status(201).send({
                id: data.id,
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                company: data.company,
                country: data.country,
                price: data.price,
                description: data.description
            });


            console.log(data.id)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Service."
            });
        });
};

exports.findAll = (req, res) => {
    return Service.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving services."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    return Service.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Service with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Service with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Service.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Service was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Client with id=${id}. Maybe Service was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Service with id=" + id
            });
        });
};


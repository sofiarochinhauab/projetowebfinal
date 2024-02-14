const db = require("../models");
const Op = db.Sequelize.Op;
const Tutorial = db.tutorials;
const Tag = db.tag;


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    return Tag.findAll({
        include: [
            {
                model: Tutorial,
                as: "tutorials",
                attributes: ["id", "title", "description"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.create = (req, res) => {
    return Tag.create({
        name: req.body.name,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findById = (id) => {
    return Tag.findByPk(id, {
        include: [
            {
                model: Tutorial,
                as: "tutorials",
                attributes: ["id", "title", "description"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then((tag) => {
            return tag;
        })
        .catch((err) => {
            console.log(">> Error while finding Tag: ", err);
        });
};

exports.addTutorial = (req, res) => {
    const { tagId, tutorialId } = req.params;

    return Tag.findByPk(tagId)
        .then((tag) => {
            if (!tag) {
                console.log("Tag not found!");
                return null;
            }
            return Tutorial.findByPk(tutorialId).then((tutorial) => {
                if (!tutorial) {
                    console.log("Tutorial not found!");
                    return null;
                }

                tag.addTutorial(tutorial)
                    .then(data => {
                    res.send(tag);
                })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the Tutorial."
                        });
                    });
            });
        })
        .catch((err) => {
            console.log(">> Error while adding Tutorial to Tag: ", err);
        });
};
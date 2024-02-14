const tag = require("../controllers/tag.controller");
module.exports = app => {
    const tag = require("../controllers/tag.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tag.create);

    router.get("/", tag.findAll);

    router.get("/tags/:id", tag.findById);

    router.post("/add-tutorial/:tagId/:tutorialId", tag.addTutorial);

    app.use('/api/tag', router);
};
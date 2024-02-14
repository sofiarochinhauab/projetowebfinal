const client = require("../controllers/client.controller.js");

module.exports = app => {
    const client = require("../controllers/client.controller.js");

    var router = require("express").Router();

    router.post("/", client.create);

    router.get("/", client.findAll);

    router.get("/:id", client.findOne);

    router.put("/:id", client.update);

    app.use('/api/client', router);
};
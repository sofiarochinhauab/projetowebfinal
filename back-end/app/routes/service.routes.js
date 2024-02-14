module.exports = app => {
    const service = require("../controllers/service.controller.js");

    var router = require("express").Router();

    router.post("/", service.create);

    router.get("/", service.findAll);

    router.get("/:id", service.findOne);

    router.put("/:id", service.update);

    app.use('/api/service', router);
};
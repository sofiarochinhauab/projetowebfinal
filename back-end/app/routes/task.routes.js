const task = require("../controllers/task.controller");

module.exports = app => {
    const task = require("../controllers/task.controller.js");

    var router = require("express").Router();

    router.post("/", task.create);

    router.get("/", task.findAll);

    router.get("/:id", task.findOne);

    router.put("/:id", task.update);

    app.use('/api/task', router);
};

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("task", {
        name: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },
    });
};
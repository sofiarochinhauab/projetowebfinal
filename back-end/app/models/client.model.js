
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("cliente", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        received: {
            type: Sequelize.INTEGER
        },
        due: {
            type: Sequelize.INTEGER
        },
        nif: {
            type: Sequelize.INTEGER
        },
        notes: {
            type: Sequelize.STRING
        },
    });
};
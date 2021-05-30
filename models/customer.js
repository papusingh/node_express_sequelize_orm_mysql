const {Sequelize,databaseConf} = require('../config/database');
// const Sequelize = db.Sequelize;
// const sequelize = db.databaseConf;

const Customer = databaseConf.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.email,
        allowNull: false
    }
})

module.exports = Customer;

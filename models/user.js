const db = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = db.databaseConf;

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(25),
        allowNull: false
    }
});

module.exports = User;
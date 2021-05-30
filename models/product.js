const {Sequelize, databaseConf} = require('../config/database');

const Product = require("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    product_category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    product_price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = Product;
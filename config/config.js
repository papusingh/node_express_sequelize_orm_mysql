module.exports = {
    HOST: "localhost",
    USER: "papu",
    PASSWORD: "8497862025",
    DB: "rest_api_sequelize",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
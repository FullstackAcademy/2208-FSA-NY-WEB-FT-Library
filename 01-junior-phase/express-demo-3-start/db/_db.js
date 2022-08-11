const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/muppets', { logging: false });

module.exports = db;
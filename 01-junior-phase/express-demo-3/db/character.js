const Sequelize = require('sequelize');
const db = require('./_db');

const Character = db.define('character', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    animal: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Character;
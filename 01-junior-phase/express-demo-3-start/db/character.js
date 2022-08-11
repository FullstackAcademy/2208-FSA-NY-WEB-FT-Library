const db = require('./_db');
const Sequelize = require('sequelize');

const Character = db.define('character', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    animal:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:false
    }
})

module.exports = Character;
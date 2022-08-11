const Sequelize = require('sequelize');
const db = require('./_db');

const Movie = db.define('movie', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    year :{
        defaultValue: 0,
        type: Sequelize.INTEGER
    }
});

Movie.prototype.yearStatement = function(){
    return `${this.name} came out in ${this.year}.`;
}

module.exports = Movie;
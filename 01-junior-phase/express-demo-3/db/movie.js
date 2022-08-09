const Sequelize = require('sequelize');
const db = require('./_db');
const Character = require('./character');

const Movie = db.define('movie', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    year: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
});

Movie.getEverything = async function() {
    const movies = await Movie.findAll({
        include: Character
    });
    return movies;
}

// instance methods
Movie.prototype.yearStatement = function() {
    // console.log("what is this?", this);
    // The Movie Gryffindor's colors are scarlet and gold.
    return `${this.name} came out in ${this.year}.`;
}


module.exports = Movie;
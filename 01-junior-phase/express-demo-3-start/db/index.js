const db = require('./_db');
const Character = require('./character');
const Movie = require('./movie');

Movie.belongsToMany(Character, {through: 'movie-character'});
Character.belongsToMany(Movie, {through: 'movie-character'});

module.exports = {
    db,
    Character,
    Movie
};
const { db, Character, Movie } = require('./db');

const Characters = [
    {
        name:"Kermit",
        movieId:1,
        animal:"frog"
    },
    {
        name:"Fozzie",
        movieId:2,
        animal:"bear"
    },
    {
        name:"Gonzo",
        movieId:3,
        animal:"alien"
    },
    {
        name:"Ms Piggy",
        movieId:4,
        animal:"pig"
    },
];

const Movies = [
    {
        name:"The Muppet Movie",
        year:1979
    },
    {
        name:"The Great Muppet Caper",
        year:1979
    },
    {
        name:"The Muppets Take Manhattan",
        year:1979
    },
    {
        name:"The Muppet Christmas Carol",
        year:1979
    },
    {
        name:"Muppets in Space",
        year:1979
    }

];

const seed = async () => {
    try {
        await db.sync({ force: true });
        await Promise.all(Movies.map(movie => Movie.create(movie)));
        await Promise.all(Characters.map(character => Character.create(character)));
        console.log('I am done seeding! Let the show begin!');
    } catch (e) {
        console.log('There was an error seeding!');
        console.error(e);
    }
}

seed()
    .then(() => db.close())
    .catch(err => {
        console.error('Problem seeding:', err)
        db.close();
    });
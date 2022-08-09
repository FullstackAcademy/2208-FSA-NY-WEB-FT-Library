const express = require('express');
const app = express();
const PORT = 8080;
const movieRouter = require('./routes/movies');
const characterRouter = require('./routes/characters');
const { db } = require('./db'); // db the folder if you don't provide a filename, it will look automatically for index.js

const setup = async () => {
    try {
        // logging middleware

        app.use('/movies', movieRouter);
        app.use('/characters', characterRouter);

        app.use((req, res) => {
            res.status(404).send('There is no information here');
        });

        // error handling middleware: (err, req, res, next) => {}
        // regular middleware: (req, res, next) => {}
        app.use((err, req, res, next) => {
            console.log('I am in error handling middleware', err.status);
            // res.send('You have an error');
            const status = err.status || 500;
            res.status(status).send(err.message);
        })

        // syncing the database before listening to the port!
        await db.sync();
        app.listen(PORT, () => {
            console.log(`Casting spells on PORT ${PORT}`);
        });
    } catch(e) {
        console.log(e);
    }
}

setup();
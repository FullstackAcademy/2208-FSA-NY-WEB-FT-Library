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
            res.status(404).send('No information')
        });

        app.use((err, req, res) => {
            const status = err.status || 500;
            res.status(status).send(err.message);
        })

        // syncing the database before listening to the port!
        await db.sync();
        app.listen(PORT, () => {
            console.log(`Listening on PORT ${PORT}`);
        });
    } catch(e) {
        console.log(e);
    }
}

setup();
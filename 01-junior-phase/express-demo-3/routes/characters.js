const router = require('express').Router();
const { Movie, Character } = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const characters = await Character.findAll();
        res.send(characters);
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {

        const character = await Character.findByPk(req.params.id, {
            include: Movie
        });


        res.send(character);
    } catch(e) {
        next(e);
    }
});

module.exports = router;
const express = require('express');
const router = require('express').Router();
const { Character, Movie } = require('../db');


router.get('/', async (req, res, next)=>{
    try {
        const characters = await Character.getEverything();
        res.send(characters);
    } catch (e) {
        next(e);
    }
})

router.get('/:id', async (req, res, next)=>{
    try {
        const movie = await Movie.findByPk(req.params.id);



        if (movie === null) {
            const error = new Error('THERE IS NO MOVIE!!!!!!! associated with this ID');
            error.status = 404; // assigning a property to an object
            throw error;
        }
        else {

            const yearStatement = movie.yearStatement();

            res.send(yearStatement);

        }
    } catch(e) {
        next(e);
    }
})

module.exports = router;
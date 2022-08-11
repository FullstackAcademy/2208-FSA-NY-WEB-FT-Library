const router = require('express').Router();
const {Movie}= require('../db')


router.get('/', async (req, res, next)=>{
    try{
        const movies = await Movie.findAll();
        res.send(movies);
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        const movie = await Movie.findByPk(req.params.id);

        if(movie===null){
            const error = new Error('There is no movie!');
            error.status = 404;
            throw error;
        }else{
            const yearStatement = movie.yearStatement();

            res.send(yearStatement);
        }
    } catch (e) {
        next(e)
    }
})

module.exports = router;
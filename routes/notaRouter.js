
// create the router
const notaRouter = require('express').Router();
const notaController= require('../controllers/notaController');



notaRouter
    .post('/new_nota', notaController.new_note)
    .get('/notes', notaController.notes);


module.exports= notaRouter;

// create the router
const notaRouter = require('express').Router();
const notaController= require('../controllers/notaController');

notaRouter
    .post('/newNote', notaController.new_note)
    .get('/notes', notaController.notes);


module.exports= notaRouter;
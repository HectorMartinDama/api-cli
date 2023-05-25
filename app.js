const express = require('express');
const mongoose = require('mongoose');


const app = express();
const notaRouter = require('./routes/notaRouter');
require('dotenv').config();
app.use(express.json());
const { version } = require('./package.json');

// create the server
const server = require('http').createServer(app);


const PORT = process.env.PORT;
const BASE_URL= process.env.BASE_URL;

// permite utilizar una base de datos distinta para los test
const MONGO_URI = process.env.NODE_ENV === 'test'
    ? process.env.MONGO_URI_TEST
    : process.env.MONGO_URI;


// healt -> Ruta para comprobar el funcionamiento de la api
app.get('/healt', (req, res) => {
    res.json({status: 'ok'});
});

// indica la version de package.json
app.get('/version', (req, res) => {
    res.send(version);
});

app.get('/', (req, res) =>{
    res.json({ 
        healt : `${BASE_URL}/healt`, 
        version: `${BASE_URL}/version`,
        allNotes: `${BASE_URL}/api/notes`,
        newNote: `${BASE_URL}/api/newNote`
    });
});


// Conexion bbdd 
mongoose.connect(MONGO_URI).then(() => {
    console.log('DataBase connect successfully.');
}).catch((err) => {
    console.log('error connecting MongoDB: ' + err.message);
});


// Puesta en marcha del servidor
server.listen(PORT, () => {
    console.log(`🚀 Server running on: http://localhost:${PORT}`);
});

app.use('/api', notaRouter);

// exportamos estos modulos
module.exports = { app, server };
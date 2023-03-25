const express = require('express');
const mongoose = require('mongoose');
const app = express();
const notaRouter= require('./routes/notaRouter');
require('dotenv').config();
app.use(express.json());
const { version }= require('./package.json');

// create the server
const server= require('http').createServer(app);

const PORT= 5001;
const MONGO_URI= process.env.NODE_ENV === 'test'
    ? process.env.MONGO_URI_TEST
    : process.env.MONGO_URI;


// healt -> Ruta para comprobar el funcionamiento de la api
app.get('/healt', (req, res) => {
  res.send('ok');
});

// indica la version de package.json
app.get('/version', (req, res) => {
    res.send(version)
});
  

// Conexion bbdd 
mongoose.connect(MONGO_URI).then(() =>{
    console.log('DataBase connect successfully.');
}).catch((err)=>{
    console.log('error connecting MongoDB: ' + err.message);
});


// Puesta en marcha del servidor
server.listen(PORT, ()=>{
    console.log(`🚀 Server running on: http://localhost:${PORT}`);
});


app.use('/api/notas', notaRouter);



module.exports= { app, server };
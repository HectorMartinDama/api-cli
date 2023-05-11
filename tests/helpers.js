const { app }= require('../app'); 
const supertest= require('supertest');
const api= supertest(app);


const initialNotas= [
    {
        nombre: 'Test Note 1',
        content: 'This is a note with property important to true',
        important: true
    },
    {
        nombre: 'Test Note 2',
        content: 'This is a note with property important to false',
        important: false
    }
];

module.exports= {
    initialNotas,
    api
};
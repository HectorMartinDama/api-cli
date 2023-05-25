const mongoose= require('mongoose');
const Nota= require('../models/nota');
const { server }= require('../app');
const { api, initialNotas }= require('./helpers');

beforeEach(async () =>{
    await Nota.deleteMany({});

    for(let nota of initialNotas){
        const newNota= new Nota(nota);
        await newNota.save();
    }
});


test('initialNotes create ok', async() =>{
    await api
        .get('/api/notes')
        .expect('Content-Type', /json/)
        .expect(200);

    const totalNotes= await Nota.find({});
    expect(totalNotes).toHaveLength(initialNotas.length);
});

test('check the endpoint dont exist', async () =>{
    await api.get('/api/notexists').expect(404);
});

test('create a new note', async () =>{
    await api
        .post('/api/newNote')
        .send({nombre: 'Hector', content: 'this is a note', important: true})
        .expect('Content-Type', /json/)
        .expect(200);

    const totalNotes= await Nota.find({});
    expect(totalNotes).toHaveLength((initialNotas.length) + 1);
});


test('check the endpoint health', async () =>{
    const response= await api
        .get('/healt')
        .expect('Content-Type', /json/)
        .expect(200);

    expect(response.body).toMatchObject({status: 'ok'});
});



// funcion que se ejecuta al finalizar todos los test
afterAll(() =>{ 
    mongoose.connection.close(); // cierra la base de datos
    server.close(); // cierra el servidor.
});


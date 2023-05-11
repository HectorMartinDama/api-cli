
const Note=  require('../models/nota');

const new_note= (async (req, res) =>{
    const data= req.body;

    const newNote= new Note({
        nombre: data.nombre,
        content: data.content,
        important: data.important
    });
    newNote.save();
    res.status(200).json({message: 'OK'});
});


const notes= (async (req, res) =>{
    const notes= await Note.find(null, {nombre: 1, content: 1, important: 1, _id: 0});
    res.status(200).json(notes);
});


module.exports= {
    new_note,
    notes
};
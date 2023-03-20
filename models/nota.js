const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const notaSchema= Schema({
    nombre: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    important: {
        type: Boolean,
        default: false,
        required: true
    },
    date: {
       type: Date,
       default: Date.now(),
       required: true

    }
});

module.exports= mongoose.model('nota', notaSchema);
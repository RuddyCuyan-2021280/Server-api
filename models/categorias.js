const { Schema, model } = require('mongoose');

const CategoriaShema = Schema({
    moto: {
        type: String
        // required: [true, 'El nombre de la moto es obligatoria']
    },
    marca: {
        type: String
        // required: [true, 'La marca es obligatoria'],
    },
    modelo: {
        type: Number
        // required: [true, 'El modelo es obligatorio']
    },
    color: {
        type: String
    },
    rol: {
        type: String
    }
});

module.exports = model('Categoria', CategoriaShema)
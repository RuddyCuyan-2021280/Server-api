const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

//Modelos
const Categorias = require('../models/categorias');

const getCategorias = async (req = request, res = response) => {


    const listaCategorias = await Promise.all([
        Categorias.find()
    ]);

    res.json({
        msg: 'GET API de categorias',
        listaCategorias
    });

}

const postCategorias = async (req , res) => {

    let data = req.body;
    console.log(data)
    const categoriasdb = new Categorias(data);

    //Guardar en Base de datos
    await categoriasdb.save();

    res.status(201).json({
        msg: 'POST API de Categorias',
        categoriasdb
    });

}

const putCategorias = async (req = request, res = response) => {

    const { id } = req.params;

    //Ignoramos el _id, rol, estado y google al momento de editar y mandar la petición en el req.body
    const { _id, estado, ...resto } = req.body;

    //editar y guardar
    const categoriaEditada = await Categorias.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT API de Categoria',
        categoriaEditada
    });

}



const deleteCategorias = async (req = request, res = response) => {

    const { id } = req.params;

    //eliminar fisicamente y guardar
    const categoriaEliminada = await Categorias.findByIdAndDelete(id);

    // O bien cambiando el estado del usuario

    //editar y guardar
    //const usuarioEliminado = await Usuario.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: 'DELETE API de Categoria',
        categoriaEliminada
    });

}



module.exports = {
    getCategorias,
    putCategorias,
    postCategorias,
    deleteCategorias
}
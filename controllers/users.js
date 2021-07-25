//Controllers, funciones que tengo definidas en las peticiones de mis rutas

const { response, request } = require('express');
//const bcryptjs = require('bcryptjs');


//const Usuario = require('../models/usuario');


const getUsers = (req = request, res = response) => {

    //Extraemos los QueryPArams de la request de la petición mediante desestruturación
    const { query, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        query,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) => {

    //Obtenemos el id desestructurando el request y obteniendo la propiedad del id desde los params
    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}


//Petición GET, implemetamos el async-await ya que es una petición asíncrona, lo realizamos de esta manera ya que la petición a la database se realiza de manera asícnrona
/*const getUsers = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        usuarios
    });
}

const usuariosPost = async(req, res = response) => {
    
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;
    const usuario = await Usuario.f.findByIdAndUpdate( id, { estado: false } );

    
    res.json(usuario);
}*/


//Exportamos los métodos
module.exports = {
    getUsers,
    usuariosPost,
    usuariosPut,
   usuariosPatch,
   usuariosDelete,
}
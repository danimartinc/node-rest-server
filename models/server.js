//Importación express
const express = require('express');
const cors    = require('cors');
//const fileUpload = require('express-fileupload');

//const { dbConnection } = require('../database/config');

//Modelo que contiene la configuración del servidor
class Server {

    //Constructor con las propiedades del servidor
    constructor() {

        //Defino la app del servidor Express()
        this.app  = express();
        //Defino el puerto donde se conecta el servidor Express
        this.port = process.env.PORT;

        //Rutas de los enpoint definidas en el servidor
       this.paths = {
            auth:       '/api/auth',
            buscar:     '/api/buscar',
            categorias: '/api/categorias',
            productos:  '/api/productos',
            users:       '/api/users',
            uploads:    '/api/uploads',
        }

        //Conectar a base de datos dde MongoDB mendiante Mongoose
       // this.conectarDB();

        // Middlewares
        this.middlewares();

        //Implemento el método que contiene las rutas de mi aplicación
        this.routes();
    }

   /* async conectarDB() {
        await dbConnection();
    }*/


    middlewares() {

        //Implemento CORS como capa de seguridad, para que no se pueda acceder desde cualquier parte al API
        this.app.use( cors() );

        //Peticiones al body, necesitamos parsear el body
        //Lectura y parseo del body, hay que pasarlo por otro Middleware
        this.app.use( express.json() );

        //Nos permite acceder al directorio público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
     /*   this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));*/

    }
    
    //Método que contiene las rutas de mi aplicación
    routes() {
        
        //use(), middleware
        this.app.use( this.paths.users, require('../routes/users'));
       // this.app.use( this.paths.auth, require('../routes/auth'));
       // this.app.use( this.paths.buscar, require('../routes/buscar'));
       // this.app.use( this.paths.categorias, require('../routes/categorias'));
       // this.app.use( this.paths.productos, require('../routes/productos'));
       // this.app.use( this.paths.usuarios, require('../routes/usuarios'));
      //  this.app.use( this.paths.uploads, require('../routes/uploads'));
        
    }
    
    //Método que escucha en que puerto está corriendo el servidor
    //Escuchar peticiones del Servidor Express mediante el listen()
    //Primer argumento, indicamos el puerto donde escuchamos la petición
    //Segundo argumento, callback() que devuelve un error si este sucede
    listen() {

        //Comprobamos si tenemos un error, si es así lo enviamos
        //if( error ) throw new Error( error );
    
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;

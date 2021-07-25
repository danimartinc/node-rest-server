//Implementamos el dotenv mediante config(), que permite leer las variables de entorno
require('dotenv').config();
//Models
const Server = require('./models/server');

//Creamos una nueva instancia de nuestro servidor Express
const server = new Server();

//Lanzamos el método para levantar el servidor
server.listen();
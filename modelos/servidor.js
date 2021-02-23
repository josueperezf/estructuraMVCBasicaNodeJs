const express = require('express');
var cors = require('cors');

class Servidor {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        // Rutas de la aplicacion
        this.routes();
    }
    middlewares() {
        // Hacer publico nuestra carpeta publica
        this.app.use(express.static('public'));

        // lectura y parseo de las peticiones body, eso es para recibir la data json
        this.app.use(express.json());

        // con app.use agrego middleware
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.usuariosPath ,require('../routes/usuarios.routes') );
    }

    escuchar(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
          })
    }
}


module.exports = Servidor;
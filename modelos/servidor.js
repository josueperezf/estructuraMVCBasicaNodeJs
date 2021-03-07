const express = require('express');
const {dbConnection} = require('../database/config');
var cors = require('cors');
class Servidor {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:       '/api/auth',
            buscar:     '/api/buscar',
            categorias: '/api/categorias',
            usuarios:   '/api/usuarios',
            productos:  '/api/productos',
        };
        // Conectar a base de datos
        this.conectarDb();
        // Middlewares
        this.middlewares();
        // Rutas de la aplicacion
        this.routes();
    }
    async conectarDb() {
        await dbConnection();
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
        this.app.use(this.paths.auth ,require('../routes/auth.routes') );
        this.app.use(this.paths.buscar ,require('../routes/buscar.routes') );
        this.app.use(this.paths.usuarios ,require('../routes/usuarios.routes') );
        this.app.use(this.paths.categorias ,require('../routes/categorias.routes') );
        this.app.use(this.paths.productos ,require('../routes/productos.routes') );
    }

    escuchar(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
          })
    }
}


module.exports = Servidor;
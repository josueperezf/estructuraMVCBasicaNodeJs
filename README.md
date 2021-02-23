## infomacion general


## Notas

1. *Middleware:* en node identificamos que hay un middleware, cuando se utiliza lo siguiente app.use(xxx), lo que esta dentro de los parentesis es un middleware

## plugins basicos

si se instala un paquete indicando que es de tipo save, sera un paquete de produccion, si decimos que es de tipo *--save-dev* es que ese paquete nos sirve solo cuando estemos programando, que cuando subamos codigos al servidor no se instalaran alla, ejemplo nodemon, nos sirve para que compile y demas, pero en produccion no nos sirve de nada

1. *npm i dotenv* es una para poder manejar de una manera facil las variables de entorno, como por ejemplo el puerto 'require('dotenv').config(); const port = process.env.PORT;'

2. *npm install cors* sirve para controlar las peticiones de origen cruzado




## infomacion general

## Notas

1. *Middleware:* en node identificamos que hay un middleware, cuando se utiliza lo siguiente app.use(xxx), lo que esta dentro de los parentesis es un middleware

## plugins basicos

si se instala un paquete indicando que es de tipo save, sera un paquete de produccion, si decimos que es de tipo *--save-dev* es que ese paquete nos sirve solo cuando estemos programando, que cuando subamos codigos al servidor no se instalaran alla, ejemplo nodemon, nos sirve para que compile y demas, pero en produccion no nos sirve de nada

1. *npm i dotenv* es una para poder manejar de una manera facil las variables de entorno, como por ejemplo el puerto 'require('dotenv').config(); const port = process.env.PORT;'

2. *npm install cors* sirve para controlar las peticiones de origen cruzado

3. *npm install mongoose* sirve para manejar la base de datos mongo, ya tiene metodos que nos ayuda a realizar a realizar query y demas 

4. *npm install bcryptjs* sirve para realizar la encriptacion de la contraseña

5. *npm install express-validator* tiene gran cantidad de validaciones, las cuales se pueden usar como middleware

## Conexion de base de datos mongo remota

este proyecto realiza conexion con mongo atlas desde la pagina <https://www.mongodb.com/cloud/atlas> accedi como con mi cuenta google.

 1. *creamos un custer*, y esperamos a que cargue 'como 3 minutos', la configuracion es la por default, solo se le coloco un nombre personalizado.

 2. luego fuimos a la seccion de *acceso a base de datos*, donde creamos un usuario con su password

 3. en la seccion de cluster, presionamos *conectar*, alli nos va a realizar preguntas, entre las que destaca, que debemos seleccionar, que nos conectaremos con mongo pass, esto nos generara una *la cadena de conexión, luego abra MongoDB Compass.*, 'mongodb+srv://josueperezf:<password>@clustercursonodecafe.jrjer.mongodb.net/test' la cual debemos de pegar en muestro programa de mongo pass que debemos tener instalado en nuestra maquina, colocando  en password la clave que creamos en el paso 2. y donde esta test, colocamos cafeDb que es la que usaremos
const path = require( 'path' );
const express = require('express');
const { dbConenection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');



//Crear el servidor de express
const app = express();

// Base de datos
dbConenection();

// CORS

app.use(cors());

//Directorio público
app.use( express.static('public'));

// Lectura y parseo del body

app.use( express.json() );



//Rutas
app.use('/api/auth', require('./routes/auth'));

// TODO: CRUD: Eventos
app.use('/api/events', require('./routes/events'));

app.use( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'public/index.html' ) );
});




//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);

});
// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar variables
var app = express();


//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');


//Conexion a la DB
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos \x1b[32m%s\x1b[0m', 'Online :D');
});


//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/', appRoutes);


//Escuchar peticiones
app.listen(3000, () => {
    console.log("Express Server \x1b[32m%s\x1b[0m", "Online port 3000");
});
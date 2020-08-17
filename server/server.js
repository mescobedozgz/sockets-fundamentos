const express = require('express');
const socketIO = require('socket.io');
const http = require('http');// Modulo por defecto de Express para trabajar con un 'servidor'

const path = require('path');

const app = express();// Express esta basado en el modulo http

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Inicializar el socket io
//io = esta es la comunicacion del Backend => Si esta bien configurado esta ruta sera visible http://localhost:3000/socket.io/socket.io.js
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
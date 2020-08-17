var socket = io();

//Escuchar sucesos
socket.on('connect', function () {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});

//Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Miguel',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});
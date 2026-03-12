const path = require('path');

exports.get_contacto = (request, response, next) => {
    response.render('info/contacto', {
        username: request.session.username || '',
    });
};

exports.get_tienda = (request, response, next) => {
    console.log('Cookie recibida:', request.get('Cookie'));
    response.render('info/tienda');
};

exports.get_preguntas = (request, response, next) => {
    response.render('info/preguntas');
};

exports.get_contacto = (request, response, next) => {
    response.render('info/contacto');
};
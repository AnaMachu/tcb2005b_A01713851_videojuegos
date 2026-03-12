
const path = require('path');

exports.get_tienda = (request, response, next) => {
    response.render('info/tienda');
};

exports.get_preguntas = (request, response, next) => {
    response.render('info/preguntas');
};

exports.get_contacto = (request, response, next) => {
    response.render('info/contacto');
};
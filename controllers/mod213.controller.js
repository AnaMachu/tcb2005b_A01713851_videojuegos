
const path = require('path');

exports.get_index = (request, response, next) => {
    response.render('info/index');
};

exports.get_preguntas = (request, response, next) => {
    response.render('info/preguntas');
};

exports.get_contacto = (request, response, next) => {
    response.render('info/contacto');
};
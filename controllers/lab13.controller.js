const Raza = require('../models/razas.model');
    
exports.get_list = (request, response, next) => {
    response.render('razas/list', {razas: Raza.fetchAll()}); 
};

exports.get_form = (request, response, next) => {
    response.render('razas/form');
};

exports.post_raza = (request, response, next) => {
    const raza = new Raza(request.body.nombre, request.body.foto);
    raza.save();
    response.redirect('/lab13/razas');
};

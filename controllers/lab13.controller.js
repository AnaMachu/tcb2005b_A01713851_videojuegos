const Raza = require('../models/razas.model');
    
exports.get_list = (request, response, next) => {
     Raza.fetch(request.params.raza_id).then(([rows, fieldData]) => {
        return response.render('razas/list', {
            username: request.session.username || '',
            razas: rows,
        });
    }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.get_form = (request, response, next) => {
    response.render('razas/form');
};

exports.post_raza = (request, response, next) => {
    const raza = new Raza(request.body.nombre, request.body.foto);
    raza.save().then(()=> {return response.redirect('/lab13/razas')})
    .catch((error) => {
        console.log(error);
        next(error);
    });
};


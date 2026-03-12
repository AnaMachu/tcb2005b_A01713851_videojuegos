exports.get_login = (request, response, next) => {
    response.render('login');
};

exports.post_login = (request, response, next) => {
    if (request.body.username && request.body.password) {
        request.session.username = request.body.username;
        response.setHeader('Set-Cookie', `username=${request.body.username}; HttpOnly`);
        response.redirect('/mod213/tienda');
    } else {
        response.redirect('/users/login'); // si viene vacío, regresa
    }
};


exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (request, response, next) => {
    response.render('info/index');
});
router.get('/preguntas', (request, response, next) => {
    response.render('info/preguntas');
});
router.get('/contacto', (request, response, next) => {
    response.render('info/contacto');
});

module.exports = router;
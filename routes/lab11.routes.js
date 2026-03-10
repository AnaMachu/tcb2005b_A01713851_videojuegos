const express = require('express');
const router = express.Router();
const path = require('path');

const razas = [
  { nombre: "Golden Retriever", foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Hund_Dog.jpg/320px-Golden_Retriever_Hund_Dog.jpg" },
  { nombre: "Husky Siberiano",  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Draw_husky.jpg/320px-Draw_husky.jpg" },
];

router.get('/', (request, response, next) => {
    response.render('razas/list', { razas });
});
      
router.get('/razas', (request, response, next) => {
    response.render('razas/list', { razas });
});
      

router.get('/agregar', (request, response, next) => {
    response.render('razas/form');
});

router.post('/razas', (request, response, next) => {
    razas.push(request.body);
    response.redirect('/lab11/razas');
});
module.exports = router;
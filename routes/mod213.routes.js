const express = require('express');
const router = express.Router();

const mod213 = require('../controllers/mod213.controller');

router.get('/', mod213.get_index);
router.get('/preguntas', mod213.get_preguntas);
router.get('/contacto', mod213.get_contacto);

module.exports = router;
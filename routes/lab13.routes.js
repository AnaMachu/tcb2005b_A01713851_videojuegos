const express = require('express');
const router = express.Router();

const lab13 = require('../controllers/lab13.controller');

router.get('/razas', lab13.get_list);
router.get('/agregar', lab13.get_form);
router.get('/:raza_id', lab13.get_list);
router.post('/razas', lab13.post_raza);

module.exports = router;
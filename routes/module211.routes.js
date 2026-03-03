const express = require('express');
const router = express.Router();

const html_header = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Información</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
</head>
<body>
<section class="section">
<div class="container">
`;

const html_footer = `
</div>
</section>
</body>
</html>
`;



router.get('/', (req, res) => {
    res.send(html_header + `
        <h1 class="title">Información del sitio</h1>
        <p>Este sitio permite registrar razas de perros.</p>
    ` + html_footer);
});



router.get('/autor', (req, res) => {
    res.send(html_header + `
        <h2 class="title">Autor</h2>
        <p>Ana Valeria Machuca Miranda</p>
    ` + html_footer);
});



router.get('/contacto', (req, res) => {
    res.send(html_header + `
        <h2 class="title">Contacto</h2>
        <p>Email: ejemplo@email.com</p>
    ` + html_footer);
});

module.exports = router;
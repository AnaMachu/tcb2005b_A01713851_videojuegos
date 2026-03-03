const express = require('express');
const router = express.Router();

const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Ana Valeria Machuca Miranda</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  </head>
  <body>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item has-text-white" href="/"> PawFriend</a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Inicio</a>
        <a class="navbar-item" href="/razas">Razas de Perros</a>
      </div>
    </div>
  </nav>
  <section class="section">
    <div class="container">
`;

const html_footer = `
    </div>
  </section>
  </body>
</html>
`;

const html_form=`   
<form action="/lab11/razas" method="POST" style="max-width: 480px;">

        <div class="field">
          <label for="nombre" class="label">Nombre de la raza</label>
          <div class="control">
            <input id="nombre" name="nombre" class="input" type="text"
                   placeholder="Ej: Labrador Retriever" required>
          </div>
        </div>

        <div class="field">
          <label for="foto" class="label">URL de la foto</label>
          <div class="control">
            <input id="foto" name="foto" class="input" type="text"
                   placeholder="https://..." required>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <input class="button is-primary" type="submit" value=" Guardar raza">
          </div>
          <div class="control">
            <a href="/" class="button is-light">Cancelar</a>
          </div>
        </div>

      </form>
    `;


const razas = [
  { nombre: "Golden Retriever", foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Hund_Dog.jpg/320px-Golden_Retriever_Hund_Dog.jpg" },
  { nombre: "Husky Siberiano",  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Draw_husky.jpg/320px-Draw_husky.jpg" },
];


router.get('/', (req, res) => {
  res.send(html_header + `
    <h1 class="title">Bienvenido a PawFriend 🐾</h1>
    <a href="/lab11/razas" class="button is-link">Ver razas</a>
    <a href="/lab11/agregar" class="button is-primary">Agregar raza</a>
  ` + html_footer);
});



router.get('/razas', (req, res) => {

  let contenido = '<h2 class="title">Razas Registradas</h2>';

  for (let i = 0; i < razas.length; i++) {
    contenido += `
      <div class="box">
        <h3 class="subtitle">${razas[i].nombre}</h3>
        <img src="${razas[i].foto}" width="200">
      </div>
    `;
  }

  res.send(html_header + contenido + html_footer);
});



router.get('/agregar', (req, res) => {
  res.send(html_header + '<h2 class="title">Agregar nueva raza</h2>' + html_form + html_footer);
});



router.post('/razas', (req, res) => {

  const nuevaRaza = {
    nombre: req.body.nombre,
    foto: req.body.foto
  };

  razas.push(nuevaRaza);

  res.redirect('/lab11/razas');
});

module.exports= router;
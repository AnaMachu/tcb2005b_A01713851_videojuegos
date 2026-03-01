const http = require('http');
const fs = require('fs');

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
      <a class="navbar-item has-text-white" href="/">🐾 PawFriend</a>
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


const razas = [
  { nombre: "Golden Retriever", foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Hund_Dog.jpg/320px-Golden_Retriever_Hund_Dog.jpg" },
  { nombre: "Husky Siberiano",  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Draw_husky.jpg/320px-Draw_husky.jpg" },
];


const server = http.createServer((req, res) => {

  
  if (req.url === "/" && req.method === "GET") {
    res.setHeader('Content-Type', 'text/html');

    const contenido = `
      <header style="margin-bottom:1.5rem">
        <h1 class="title">Desarrollo web con: Ana</h1>
        <p class="subtitle">A01713851 &nbsp;|&nbsp; 4422395609 &nbsp;|&nbsp; ITESM QRO</p>
      </header>

      <div class="content">

        <h2>Acerca de mí</h2>
        <p>Hola! Tengo 19 años y estudio Ingeniería en Tecnologías Computacionales. Soy bailarina y porrista.</p>

        <h2>Experiencia</h2>
        <p>He tenido experiencia en mis proyectos escolares trabajando con los siguientes lenguajes:</p>
        <ul>
          <li>C++</li><li>Python</li><li>SQL</li>
          <li>HTML</li><li>CSS</li><li>Java</li>
        </ul>

        <h2>Gustos personales</h2>
        <p>
          Me gusta mucho escuchar música como
          <a href="https://open.spotify.com/intl-es/track/61og03io9xPCosu9rkgh1t">Mi canción favorita</a>
          y esta <a href="https://open.spotify.com/intl-es/track/2lTm559tuIvatlT1u0JYG2">otra canción que me gusta</a>.
        </p>
        <p>Mi libro favorito es "Muerte en el Nilo" de Agatha Christie.</p>
        <p>Me gusta mucho bailar los siguientes estilos:</p>
        <ol><li>Jazz</li><li>Ballet</li><li>Urbano</li><li>Contemporáneo</li></ol>

        <hr>

        <h2>HTTP, métodos, HTML4 y HTML5</h2>

        <p><strong>¿Cuál es la diferencia entre Internet y la World Wide Web?</strong><br>
        Internet es una inmensa red de computadoras alrededor de todo el mundo conectadas entre sí. En cambio, la web es una enorme colección de páginas que se asienta sobre esa red.</p>

        <p><strong>¿Cuáles son las partes de un URL?</strong><br>
        Protocolo (HTTP/HTTPS), dominio, path, parámetros y ancla. Todo va al puerto 80 por default.</p>

        <p><strong>¿Cuál es el propósito de los métodos HTTP?</strong><br>
        GET: solicitar datos. HEAD: solo encabezados. POST: mandar data y crear recurso. PUT: actualizar recurso completo. PATCH: modificaciones parciales. DELETE: eliminar recurso.</p>

        <p><strong>¿Qué método HTTP se usa al enviar usuario y contraseña?</strong><br>
        POST, porque estás mandando datos sensibles en el cuerpo de la petición.</p>

        <p><strong>¿Qué significa un código 200?</strong><br>
        No hubo ningún error, todo está en orden con la respuesta.</p>

        <p><strong>¿Error 404 es responsabilidad del desarrollador?</strong><br>
        No necesariamente. Sale cuando el usuario busca una ruta que no existe. A menos que algún enlace interno esté mal.</p>

        <p><strong>¿Error 500 es responsabilidad del desarrollador?</strong><br>
        Sí, significa que el servidor tuvo un error al intentar satisfacer la petición.</p>

        <p><strong>¿Qué significa que un atributo esté deprecated en HTML5?</strong><br>
        Que ya no tendrá actualizaciones y dejará de ser compatible. Ejemplos: &lt;center&gt;, &lt;font&gt;, &lt;strike&gt;, &lt;frame&gt;.</p>

        <p><strong>Diferencias entre HTML4 y HTML5:</strong></p>
        <ul>
          <li>Nuevas etiquetas semánticas: header, nav, article, section, footer</li>
          <li>Multimedia nativa: audio y video sin plugins</li>
          <li>Nuevos tipos de input: email, date, number, color, range...</li>
          <li>APIs de JavaScript: Canvas, Geolocation, LocalStorage</li>
          <li>DOCTYPE simplificado: &lt;!DOCTYPE html&gt;</li>
        </ul>

        <hr>

        <h2>CSS</h2>
        <p><strong>¿Recomendación sobre !important?</strong><br>
        Usar con moderación, solo en casos específicos como anular estilos externos que no puedes modificar directamente.</p>

        <p><strong>¿Por qué elegir con cuidado una imagen de fondo?</strong><br>
        Por el tamaño del archivo (velocidad de carga), alineación al contexto y que no interfiera con la lectura del texto.</p>

        <p><strong>¿% vs px vs pt?</strong><br>
        Se recomienda % porque es relativo y se adapta a distintos tamaños de pantalla. px puede variar según resolución.</p>

        <hr>

        <h2>Material Design</h2>
        <p>Es un sistema de diseño open source respaldado por Google para crear interfaces. Ofrece componentes como App bars, Buttons, Date pickers, Time pickers y Sliders.</p>

        <hr>

        <h2>Tienda en Línea: PawFriend 🐾</h2>
        <p>Hola! Nuestros productos tienen las mejores ofertas para ti.</p>
        <div class="columns is-multiline">

          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-5">Brazalete de la amistad para mascota</h3>
                <p>Comparte un brazalete matching para reforzar el vínculo con tu mascota.</p>
                <p class="has-text-weight-bold">$600</p>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-5">Suéter Navideño</h3>
                <p>Viste a tu mascota según la temporada invernal.</p>
                <p class="has-text-weight-bold">$350</p>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-5">Bebedero/Comedero Inteligente</h3>
                <p>Que a tu mascota nunca le falten alimentos incluso si tú no estás.</p>
                <p class="has-text-weight-bold">$430</p>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-5">Cobija con cara de mascota</h3>
                <p>Personaliza una frazada para compartirla con tu peludo.</p>
                <p class="has-text-weight-bold">$700</p>
              </div>
            </div>
          </div>

        </div>

        <a href="/razas" class="button is-primary mt-4">🐶 Ver razas de perros</a>

      </div>
    `;

    res.write(html_header + contenido + html_footer);
    res.end();

  
  } else if (req.url === "/razas" && req.method === "GET") {
    res.setHeader('Content-Type', 'text/html');

    let tarjetas = '';
    for (let raza of razas) {
      tarjetas += `
        <div class="column is-3">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${raza.foto}" alt="${raza.nombre}">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5">${raza.nombre}</p>
            </div>
          </div>
        </div>
      `;
    }

    const contenido = `
      <h1 class="title">Razas de Perros</h1>
      <p class="subtitle">Catálogo de razas registradas</p>

      <div class="columns is-multiline mb-6">
        ${tarjetas}
      </div>

      <hr>

      <h2 class="title is-4">Agregar nueva raza</h2>

      <form action="/razas" method="POST" style="max-width: 480px;">

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

    res.write(html_header + contenido + html_footer);
    res.end();

  
  } else if (req.url === "/razas" && req.method === "POST") {

    const chunks = [];

    req.on('data', (chunk) => {
      chunks.push(chunk);
    });

    req.on('end', () => {
      const body = Buffer.concat(chunks).toString();
      const params = new URLSearchParams(body);

      const nombre = params.get('nombre');
      const foto   = params.get('foto');

      
      razas.push({ nombre, foto });

     
      const linea = `${new Date().toISOString()} | Raza: ${nombre} | Foto: ${foto}\n`;
      fs.appendFile('razas.txt', linea, (err) => {
        if (err) console.error("Error al guardar:", err);
        else console.log("Raza guardada en razas.txt");
      });

      
      res.writeHead(302, { Location: '/razas' });
      res.end();
    });

 
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(404);

    const error = `
      <h1 class="title has-text-danger"> Error 404</h1>
      <p class="subtitle">La página <strong>${req.url}</strong> no existe.</p>
      <a href="/" class="button is-primary">← Volver al inicio</a>
    `;

    res.write(html_header + error + html_footer);
    res.end();
  }

});

server.listen(3000)
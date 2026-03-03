const express = require('express');
const app = express();

const path=require(path);
app.use(express.static(path.join(__dirname,'public'))); //daarle acceso a todo el mundo

app.set('view engine','ejs');
app.set('views','views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasVideojuegos = require('../routes/videojuegos.routes');
app.use('/videojuegos', rutasVideojuegos);

app.use((request,response, nexto)=>{
  response.status(404).send("El videojuego no existe");
})

app.listen(3000);
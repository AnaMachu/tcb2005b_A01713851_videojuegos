const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutaslab11 = require('./routes/lab11.routes');
app.use('/lab11', rutaslab11);
const rutasmod2 = require('./routes/module211.routes');
app.use('/module211', rutasmod2);


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
  response.status(404).send("La página no existe");
});

app.listen(3000);

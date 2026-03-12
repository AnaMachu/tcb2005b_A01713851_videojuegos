const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
EJS
 
app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutaslab11 = require('./routes/lab11.routes');
app.use('/lab11', rutaslab11);
const rutasmod2 = require('./routes/module211.routes');
app.use('/module211', rutasmod2);

// Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.use((request, response, next) => {
  response.status(404).send("La página no existe");
});

app.listen(3000);
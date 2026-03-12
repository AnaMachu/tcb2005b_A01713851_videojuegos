const express = require('express');
const app = express();

const path = require('path');  
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

const rutaslab13 = require('./routes/lab13.routes');
app.use('/lab13', rutaslab13);
const rutasmod2 = require('./routes/mod213.routes');
app.use('/mod213', rutasmod2);


app.use((request, response, next) => {
  response.status(404).send("La página no existe");
});

app.listen(3000);
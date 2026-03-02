
console.log("hola desde node");
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt','hola desde node');

const arreglo=[5000,60,90,100,10,20,1000,0,120,200,340,10000,50];
for (let item of arreglo){
    setTimeout(()=>{
        console.log(item);
    },item);
}

const http = require('http');

const server = http.createServer((request,response) =>{
    //console.log(request);
    //console.log(request.url);
    //console.log(response)
    //response.end()
    //response.setHeader

});

server.listen(3000);

//const html()

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);
                            
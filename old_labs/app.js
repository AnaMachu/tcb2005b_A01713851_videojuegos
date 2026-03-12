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
    response.end()

});

server.listen(3000);
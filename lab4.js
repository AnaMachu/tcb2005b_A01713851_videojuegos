//problema 1
var n=prompt("Ingresa un numero");

if(n>0){
    document.write("<h2>Tabla de cuadrados y cubos</h2>");
    document.write("<table>");
    document.write("<tr><th>Numero</th><th>Cadrado</th><th>Cubo</th></tr>");
    for(var i=1;i<=n;i++){
    document.write("<tr><td>" + i + "</td>");
    document.write("<td>"+i**2+ "</td>");
    document.write("<td>"+i**3+ "</td> </tr>");
}
document.write("</table>");
}else{
    document.write("<p>Debe ser un número entero positivo</p>");
}

//problema2
var num1= Math.floor(Math.random() * 1000) + 1;
var num2= Math.floor(Math.random() * 1000) + 1;
document.getElementById("numeros").innerHTML = 
"<h2> Sumatoria de 2 numeros: <h2>" +
  "<p>Numero 1: " + num1 + "</p>" +
  "<p>Numero 2: " + num2 + "</p>" +
  "<button onclick ='sum2()'> responder </button>";


function sum2(){
const sum=num1 + num2;
const initime=Date.now();
var response= prompt("Dame la respuesta de la suma");
const fintime = Date.now();
const totime= ((fintime - initime)/ 1000).toFixed(2);
if (response==sum){
    document.getElementById("respuesta").innerHTML = 
    "<p>Tu respuesta es correcta, la suma es " + sum + "</p>"+
    "<p>Tardaste en contestar" + totime +"segundos </p>";
} else{
    document.getElementById("respuesta").innerHTML = 
    "<p>Tu respuesta es incorrecta, la suma es " + sum + "</p>"+
    "<p>Tardaste en contestar" + totime +"segundos </p>";
}
}

//problema 3

var array=new Array(2,34,100,-5,-67,101)

function countnumbers(array){
    var ceros=0;
    var negatives=0;
    var positives=0;
    
    for(let element of array){
        if(element == o){
            ceros ++
        }
        if(element < 0 ){
            negatives ++
        }else {
            positives ++
        }  

    }
}


//problema 4


var matrix = [
    [2, 3, 45, 70],
    [8, 90, 65, 30],
    [73, 12, 83, 20]
];

function promedios(matrix){
    var newmatrix = []; 

    for(var i = 0; i < matrix.length; i++){
        var sum = 0;

        for(var j = 0; j < matrix[i].length; j++){
            sum += matrix[i][j]; 
        }

        var prom = sum / matrix[i].length; 
        newmatrix.push(prom);
    }

    return newmatrix;
}

var resultado = promedios(matrix);
document.write("<p>Promedios: " + resultado + "</p>");

//problema 5

var numoriginal= 45678;


function inverse(numoriginal){

    let str=numoriginal.toString();
    var numinvertido="";
    for( let i=str.length -1; i>=0; i--){
        numinvertido += str[i];
    }
    var inverted= Number(numinvertido);

   return  inverted;

}

//  Problema 6

 var inventario = {
    productos: {
        Pintura: { Precio: 600, Cantidad: 10 },
        Plastico: { Precio: 500, Cantidad: 50 },
        Impermeabilizante: { Precio: 1200, Cantidad: 80 },
        Adhesivos: { Precio: 400, Cantidad: 60 }
    },

    addProduct: function(nombre, precio, cantidad) {
        this.productos[nombre] = { Precio: precio, Cantidad: cantidad };
    },

    quitProduct: function(nombre) {
        delete this.productos[nombre];
    },

    totalvalue: function() {
        let total = 0;

        for (let prop in this.productos) {
            total += this.productos[prop].Precio *
                     this.productos[prop].Cantidad;
        }

        return total;
    }
};
document.getElementById("prob6").innerHTML=
"<h2> Inventario de productos </h2>"+
"<button onclick ='showelements()'> Ver inventario</button>"+
"<button onclick ='agregar()'> Añadir producto</button>"+
"<button onclick ='eliminar()'> Eliminar producto</button>"+
"<div id='prob6funciones'></div>";

function showelements() {
    let html = "<table border='1'>" +
        "<tr><th>Producto</th><th>Precio</th><th>Cantidad</th></tr>";

    for (let prop in inventario.productos) {
        if (typeof inventario.productos[prop] === "object") {
            html += "<tr>" +
                "<td>" + prop + "</td>" +
                "<td>$" + inventario.productos[prop].Precio + "</td>" +
                "<td>" + inventario.productos[prop].Cantidad + "</td>" +
                "</tr>";
        }
    }

    html += "</table>";
    html += "<p><b>Valor total: $" + inventario.totalvalue() + "</b></p>";
    document.getElementById("prob6funciones").innerHTML = html;
}
   
 function agregar() {
    document.getElementById("prob6funciones").innerHTML =
        "<h3>Agregar producto</h3>" +
        "<input id='nombre'   placeholder='Nombre'><br>" +
        "<input id='precio'   placeholder='Precio'><br>" +
        "<input id='cantidad' placeholder='Cantidad'><br>" ;
        
}
function eliminar() {
    document.getElementById("prob6funciones").innerHTML =
        "<h3>Eliminar producto</h3>" +
        "<input id='quitar' placeholder='Nombre del producto'><br>" ;
}
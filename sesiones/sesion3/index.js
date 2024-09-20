
//Capturamos botones
const boton1 = document.querySelector('#btn1');
console.log(boton1);

//Capturamos el h1 y miramos lo que hay dentro
const titulo = document.querySelector("h1");
console.log('h1',titulo);
console.log('interior del h1: ',titulo.innerHTML);

//Cambiamos el interior del h1 con un nuevo codigo html
titulo.innerHTML = '<em>Otro Titulo</em>';

//Escuchamos evento click del boton1
boton1.addEventListener("click", fnBoton1);
function fnBoton1(){
    console.log("Click en botón 1");
}

//Lo mismo para el boton 2 de forma resumida
document.querySelector("#btn2").addEventListener("mouseover", function(){
    console.log("Raton sobre boton 2");
})

//Evaluando textos
const operacion = "'2'+3";
console.log("operacion: ", operacion);
console.log("el resultado es: ", eval(operacion));

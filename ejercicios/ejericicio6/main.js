const botonNumeroAleatorio = document.querySelector("#botonNumeroAleatorio");
botonNumeroAleatorio.addEventListener("click", numeroAleatorio);
function numeroAleatorio(){
    let numeroMinimo = parseInt(document.querySelector("#num1").value);
    let numeroMaximo = parseInt(document.querySelector("#num2").value);
    console.log(numeroMinimo);
    console.log(numeroMaximo);
    let numeroRandom = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    console.log(numeroRandom);
    document.querySelector("#numeroAleatorio").innerHTML = numeroRandom;
}


const botonMayus = document.querySelector("#mayusculas");
botonMayus.addEventListener("click", convertirMayusculas);
function convertirMayusculas(){
    let texto = document.querySelector("#texto");
    let textoMayusculas = texto.value.toUpperCase();
    document.querySelector("#texto").innerHTML = textoMayusculas;
    texto.value = textoMayusculas;
    let palabras = textoMayusculas.split(/\s+/);
    console.log(palabras);
}


const botonMinus = document.querySelector("#minusculas");
botonMinus.addEventListener("click", convertirMinusculas);
function convertirMinusculas(){
    let texto = document.querySelector("#texto");
    let textoMinusculas = texto.value.toLowerCase();
    document.querySelector("#texto").innerHTML = textoMinusculas;
    texto.value = textoMinusculas;
    let palabras = texto.split(", ");
    console.log(palabras);
}



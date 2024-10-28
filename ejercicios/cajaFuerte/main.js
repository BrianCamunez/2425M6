const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
boton1.addEventListener("click", function () {
  console.log("has clickado el primer boton");
});
boton2.addEventListener("click", function () {
  console.log("has clickado el segundo boton");
});
boton3.addEventListener("click", function () {
  console.log("has clickado el tercer boton");
});

const botonCambiarTexto = document.querySelector("#boton");
const cambiarTexto = document.querySelector("#miDiv");

let texto = "Este texto se ha cambiado con una funcion";

botonCambiarTexto.addEventListener("click", function () {
  cambiarTexto.innerHTML = texto;
});

const botonCambiarDisplay = document.querySelector("#toggleButton");
const cambiarTexto2 = document.querySelector("#miDiv2");

botonCambiarDisplay.addEventListener("click", function () {
  if (miDiv2.style.display === "none") {
    miDiv2.style.display = "block";
  } else {
    miDiv2.style.display = "none";
  }
});

const botonGenerarNumeroRandom = document.querySelector("#botonRandom");
let textoNumeroRandom = document.querySelector("#resultado");

botonGenerarNumeroRandom.addEventListener("click", function () {
  let numeroRandom = Math.floor(Math.random() * 100);
  textoNumeroRandom.innerHTML = numeroRandom;
});

const botonCambiarFoto = document.querySelector("#cambiarImagen");
const imagenCambiar = document.querySelector("#imagen");

botonCambiarFoto.addEventListener("click", function () {
  imagenCambiar.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprtCENnVIYZEzR5tdzTAoyzckoGmKLOxfYw&s"
  );
});

const toggleButton = document.querySelector("#toggleClass");
const miElement = document.querySelector("#miElement");

toggleButton.addEventListener("click", function () {
  miElement.classList.toggle("actiu");
});

const fruits = ["poma", "banana", "taronja", "maduixa", "kiwi"];
const fruitList = document.querySelector("#fruitList");

fruits.forEach(function (fruit) {
  const li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
});

const preguntesRespostes = [
  ["Quin és el teu color favorit?", "El meu color favorit és el blau."],
  [
    "Quina és la teva fruita preferida?",
    "La meva fruita preferida és la maduixa.",
  ],
  ["On vius?", "Vivo a Barcelona."],
];

const primeraPregunta = preguntesRespostes[0][0];
const primeraResposta = preguntesRespostes[0][1];

document.querySelector("#pregunta").textContent = primeraPregunta;
document.querySelector("#respuesta").textContent = primeraResposta;

function sumar(num1, num2) {
  return num1 + num2;
}

document.querySelector("#botonSumar").addEventListener("click", function () {
  const resultado = sumar(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  );
  document.querySelector(
    "#resultado8"
  ).innerHTML = `El resultado es : ${resultado}`;
});

document.querySelector("#botonValidar").addEventListener("click", function () {
  const entrada = document.querySelector("#entrada").value;
  const mensajeError = document.querySelector("#mensajeError");

  if (entrada === "") {
    mensajeError.style.display = "block";
    mensajeError.textContent = "Error: No has escrito NADA";
  } else {
    mensajeError.style.display = "none";
    mensajeError.textContent = "";
  }
});

document.querySelector("#botonAlerta").addEventListener("click", function () {
  alert("¡¡ESTO ES UNA ALERTA!!");
});

document
  .querySelector("#botonComparar10")
  .addEventListener("click", function () {
    const numero = parseInt(document.querySelector("#numeroInput").value);
    const resultadoComparado = document.querySelector("#resultadoComparado");

    if (numero > 10) {
      resultadoComparado.textContent = "El número és més gran que 10.";
    } else if (numero < 10) {
      resultadoComparado.textContent = "El número és més petit que 10.";
    } else {
      resultadoComparado.textContent = "El número és igual a 10.";
    }
  });

document.querySelector("#mostrarSrc").addEventListener("click", function () {
  const imagen13 = document.querySelector("#imagen13");
  const src = imagen13.getAttribute("src");
  document.querySelector(
    "#resultadoAtributo"
  ).textContent = `El atributo es : ${src}`;
});

document.querySelector("#eliminarAlt").addEventListener("click", function () {
  const imagenAlt = document.querySelector("#imagenAlt");
  imagenAlt.removeAttribute("alt");
  alert("¡Se ha eliminado el atrinuto alt!");
});

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarPares() {
  const resultadoDiv = document.querySelector("#resultadoCondicional");
  let resultadoPares = "";
  numeros.forEach(function (numero) {
    if (numero % 2 === 0) {
      resultadoPares += numero + " ";
    }
  });

  resultadoDiv.innerHTML = resultadoPares;
}

mostrarPares();

const botonAbs = document.querySelector("#botonAbs");

botonAbs.addEventListener("click", function (numeroAbs) {
  const numeroInputAbs = document.querySelector("#numeroInputAbs").value;
  const pasarNumeroAbs = document.querySelector("#EjMath");
  pasarNumeroAbs.innerHTML = Math.abs(numeroInputAbs);
});

function comprobarSigno() {
  const numeroSigno = document.querySelector("#numeroInputSigno").value;
  let mensaje;

  switch (Math.sign(numeroSigno)) {
    case 1:
      mensaje = "El número es positivo.";
      break;
    case -1:
      mensaje = "El número es negativo.";
      break;
    case 0:
      mensaje = "El número es zero.";
      break;
  }

  document.querySelector("#EjMathSigno").innerHTML = mensaje;
}

document.querySelector("#botonSigno").addEventListener("click", comprobarSigno);

function encontrarMax() {
  const numero1Max = document.querySelector("#numero1Max").value;
  const numero2Max = document.querySelector("#numero2Max").value;
  const numero3Max = document.querySelector("#numero3Max").value;

  const resultado = Math.max(numero1Max, numero2Max, numero3Max);

  document.querySelector("#resultadoMax").innerHTML = resultado;
}

document.querySelector("#botonMin").addEventListener("click", encontrarMin);

function encontrarMin() {
  const numero1Min = document.querySelector("#numero1Min").value;
  const numero2Min = document.querySelector("#numero2Min").value;
  const numero3Min = document.querySelector("#numero3Min").value;

  const resultado = Math.min(numero1Min, numero2Min, numero3Min);

  document.querySelector("#resultadoMin").innerHTML = resultado;
}

document.querySelector("#botonMin").addEventListener("click", encontrarMin);

function minArray(arrayNumeros) {
  return Math.min(...arrayNumeros);
}

var numerosArray = [3, 7, 2, 9, 4];

document.querySelector("#resultadoMinArray").innerHTML = minArray(numerosArray);

function raizCuadrada() {
  return Math.sqrt(16);
}

document.querySelector("#raizCuadrada").innerHTML = raizCuadrada();

function aproxNumero() {
  return Math.round(5.3);
}

document.querySelector("#aproxNumero").innerHTML = aproxNumero();

function aproxNumeroArriba() {
  return Math.ceil(5.3);
}

document.querySelector("#aproxNumeroArriba").innerHTML = aproxNumeroArriba();

function aproxNumeroAbajo() {
  return Math.floor(5.3);
}

document.querySelector("#aproxNumeroAbajo").innerHTML = aproxNumeroAbajo();

function interpolarVariables(nombre, edad) {
  return `Mi nombre es ${nombre} y tengo ${edad} años`;
}

document.querySelector("#completarFrase").innerHTML = interpolarVariables(
  "Brian",
  "19"
);

function obtenerCaracter(cadena, posicion) {
  return cadena.charAt(posicion);
}

document.querySelector("#charAt").innerHTML = obtenerCaracter(
  "Me gusta el zumo de piña",
  5
);

function encontrarPosicion(cadena, subcadena) {
  return cadena.indexOf(subcadena);
}
document.querySelector("#indexOf").innerHTML = encontrarPosicion(
  "Buenas tardes",
  "tardes"
);

function repetirCadena(cadena, veces) {
  return cadena.repeat(veces);
}

document.querySelector("#repeat").innerHTML = repetirCadena("Hola", 3);

function obtenerString(cadena, inicio, final) {
  return cadena.substring(inicio, final);
}

document.querySelector("#substring").innerHTML = obtenerString(
  "JavaScript",
  4,
  6
);

function dividirCadena(cadena, separador) {
  return cadena.split(separador);
}

document.querySelector("#split").innerHTML = dividirCadena(
  "manzana,pera,platano",
  ","
);

function empiezaCon(cadena, subcadena) {
  return cadena.startsWith(subcadena);
}

document.querySelector("#startsWith").innerHTML = empiezaCon(
  "JavaScript",
  "Java"
);

function acabaCon(cadena, subcadena) {
  return cadena.endsWith(subcadena);
}

document.querySelector("#endWith").innerHTML = acabaCon("JavaScript", "Script");

function contieneCadena(cadena, subcadena) {
  return cadena.includes(subcadena);
}

document.querySelector("#includes").innerHTML = contieneCadena(
  "hola que tal",
  "que"
);

function buscarCadena(cadena, subcadena) {
  return cadena.search(subcadena);
}

document.querySelector("#search").innerHTML = buscarCadena(
  "El cielo es azul",
  "azul"
);

function buscarCoincidencias(cadena, coincidencia) {
  return cadena.match(coincidencia);
}

document.querySelector("#match").innerHTML = buscarCoincidencias(
  "Hola 123, adios 456",
  /\d+/g
);

function cambiarCadena(cadena, cadenaAntigua, cadenaNueva) {
  return cadena.replace(cadenaAntigua, cadenaNueva);
}

document.querySelector("#replace").innerHTML = cambiarCadena(
  "Me gusta el pure",
  "pure",
  "pastel"
);

function cambiarTodo(cadena, cadenaAntigua, cadenaNueva) {
  return cadena.replaceAll(cadenaAntigua, cadenaNueva);
}

document.querySelector("#replaceAll").innerHTML = cambiarTodo(
  "Hola mundo, mundo",
  "mundo",
  "Javier"
);

function convertirMinusculas(cadena) {
  return cadena.toLowerCase();
}

document.querySelector("#lowerCase").innerHTML =
  convertirMinusculas("bUENos Dias");

function convertirMayusculas(cadena) {
  return cadena.toUpperCase(cadena);
}

document.querySelector("#upperCase").innerHTML = convertirMayusculas(
  "esto estaba en minusculas"
);

function eliminarEspacioInicial(cadena) {
  return cadena.trimStart();
}

document.querySelector("#trimStart").innerHTML = eliminarEspacioInicial(
  "         Sin espacio inicial"
);

function eliminarEspacioFinal(cadena) {
  return cadena.trimEnd();
}

document.querySelector("#trimEnd").innerHTML = eliminarEspacioFinal(
  "Sin espacio final        "
);

function eliminarEspacioExtremos(cadena) {
  return cadena.trim();
}

document.querySelector("#trim").innerHTML = eliminarEspacioExtremos(
  "     Sin espacio en los extremos       "
);

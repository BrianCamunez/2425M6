import { menu } from "./components/menu.js";

import { pintarTabla } from "./components/crearTabla.js";

import { partidas } from "./components/array.js";

function header() {
  return `${menu()}
    `;
}
document.querySelector("#encabezado").innerHTML = header();

function cargarTabla() {
  return `${pintarTabla()}
  `;
}

document.querySelector("#partidas").innerHTML = cargarTabla();

const boton = document.querySelector("#botonPush");
boton.addEventListener("click", function pintaDatosPartida() {
  if (confirm("Quieres cargar una nueva partida") == true) {
    console.log("si se ha cargado");
    nuevoDato();
    cargarTabla();
    document.querySelector("#partidas").innerHTML = cargarTabla();
  } else {
    console.log("No se ha cargado");
  }
});

function nuevoDato() {
  partidas.push({
    avatar: "🦄",
    nick: "push",
    puntos: 1000,
    fecha: "2024-11-09",
  });
  console.log(partidas);
  pintarTabla();
}

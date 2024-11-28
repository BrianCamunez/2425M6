//importamos componentes
import { header } from "./components/header.js";
import { home } from "./vistas/home.js";
import { about } from "./vistas/about.js";

console.log("Cargando index.js");

console.log(header());

function app() {
  return `
  ${header()}
  <div id="vistas">Aqui van las vistas</div>
  `;
}

//Cargar elementos dinamicos
document.querySelector("#root").innerHTML = app();

function navegar(pagina) {
  if (pagina == "home") {
    document.querySelector("#vistas").innerHTML = home();
  } else if (pagina == "about") {
    document.querySelector("#vistas").innerHTML = about();
  }
}

document.querySelector("#btn-home").addEventListener("click", function () {
  navegar("home");
});

document.querySelector("#btn-about").addEventListener("click", function () {
  navegar("about");
});

navegar("home");

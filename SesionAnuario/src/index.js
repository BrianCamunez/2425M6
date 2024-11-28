import { header } from "./components/header.js";
import { home } from "./vistas/home.js";

function app() {
  return `${header()}
                <div id=vistas class="container-fluid">
                    ${home()}
                </div>`;
}

document.querySelector("#root").innerHTML = app();

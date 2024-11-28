import { menu } from "./menu.js";

export function header() {
  return `
    <h1>Soy el encabezado</h1>
    ${menu()}
    `;
}

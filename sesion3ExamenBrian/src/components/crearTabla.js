import { partidas } from "./array.js";
export function pintarTabla() {
  let $tabla = `
   <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Icono</th>
        <th scope="col">Nick</th>
        <th scope="col">Puntos</th>
        <th scope="col">Fecha</th>
      </tr>
    </thead>
    <tbody>
  `;
  partidas.forEach((partida) => {
    $tabla += `
        <tr>
        <th scope="row">${partida.avatar}</th>
        <td>${partida.nick}</td>
        <td>${partida.puntos}</td>
        <td>${partida.fecha}</td>
      </tr>
        `;
  });
  $tabla += `
      </tbody>
  </table>
    `;
  return $tabla;
}

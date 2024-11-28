import { alumnos } from "./alumnos.js";
export function cardAlumno() {
  let $cardAlumnos = `<div class="row">`;
  alumnos.forEach((alumno) => {
    $cardAlumnos += `
    <div class="col-md-2 mb-4">
    <div class="card" style="width: 18rem;">
        <img src="${alumno.foto}" class="card-img-top" alt="Foto Alumno">
        <div class="card-body">
            <p class="card-text">${alumno.nombre} ${alumno.apellido}</p>
        </div>
    </div>
    </div>
    `;
  });

  $cardAlumnos += "</div>";
  return $cardAlumnos;
}

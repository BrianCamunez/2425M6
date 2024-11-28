import { useState } from "react";
export default function App() {
  const [arrayPartidas, setArrayPartidas] = useState([
    {
      id: 1,
      puntos: 20,
    },
    {
      id: 2,
      puntos: 15,
    },
  ]);
  const [numRegistros, setNumRegistros] = useState(arrayPartidas.length); //La diferencia entre un state y una variable normal es que el state hace un render(recarga la pagina)
  function ctrlNumRegistros() {
    const nuevoRegistro = {
      id: 3,
      puntos: 40,
    };
    arrayPartidas.push(nuevoRegistro);
    console.log(arrayPartidas);
    setArrayPartidas([...arrayPartidas]); //[...arrayPartidas] hace una copia de la array, y se recarga pero si has cambiado la array a diferenciad de poner el nombre solo  que pone el puntero.
    //setNumRegistros(arrayPartidas.length);
  }
  function ordenarArrayDescendente() {
    const arrayOrdenada = arrayPartidas.sort((a, b) => a.puntos - b.puntos);
    console.log(arrayOrdenada);
    setArrayPartidas([arrayOrdenada]);
  }
  function ordenarArrayAscendente() {
    const arrayOrdenada = arrayPartidas.sort((a, b) => b.puntos - a.puntos);
    console.log(arrayOrdenada);
    setArrayPartidas([arrayOrdenada]);
  }
  return (
    <div>
      <h1>Sesion 4 Plus</h1>
      <div>
        Numero registro: <span>{numRegistros}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {arrayPartidas.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={ctrlNumRegistros}>Sumar registro</button>
      <button onClick={ordenarArrayDescendente}>Ordenar registros</button>
      <button onClick={ordenarArrayAscendente}>Ordenar registros</button>
    </div>
  );
}

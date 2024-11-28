import viajes from "../viajes.json";
export function Viajes() {
  const listaViajes = viajes.map(function (item, index) {
    console.log("elemento", index, ":", item.destino);
    return item.destino;
  });
  console.log(listaViajes);
  return (
    <>
      <div style={{ border: "1px solid green" }} className="componente">
        <h1>Lista viajes</h1>
        <ul>
          {listaViajes.map(function (item, index) {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

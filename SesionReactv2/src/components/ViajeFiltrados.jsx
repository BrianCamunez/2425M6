import viajes from "../viajes.json";
export function ViajeFiltrado() {
  console.log("Creando componente:ViajeFiltrado");
  const filtrados = viajes.filter(function (item, index) {
    return item.id != 2;
  });
  console.log(filtrados);
  return (
    <>
      <div style={{ border: "1px solid green" }} className="componente">
        <h1>Lista viajes filtrados</h1>
        <ul>
          {filtrados.map(function (item, index) {
            return <li key={index + 3}>{item.destino}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

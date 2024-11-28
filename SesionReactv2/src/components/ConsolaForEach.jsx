import viajes from "../viajes.json";
export function ConsoleForEach() {
  console.log("Creando componente:ConsoleForEach");
  console.log(viajes);
  viajes.forEach(function (elemento, index) {
    console.log("elemento", index, ":", elemento.destino);
  });
  return (
    <>
      <div style={{ border: "1px solid pink" }} className="componente">
        <h1>Vista de ConsoleForEach</h1>
      </div>
    </>
  );
}

import { ConsoleForEach } from "./components/ConsolaForEach.jsx";
import { Viajes } from "./components/Viajes.jsx";
import { ViajeFiltrado } from "./components/ViajeFiltrados.jsx";
export default function App() {
  console.log("Componente App cargado");
  return (
    <>
      <h1>App principal</h1>
      <p>Parafo</p>
      <ConsoleForEach />
      <Viajes />
      <ViajeFiltrado />
    </>
  );
}

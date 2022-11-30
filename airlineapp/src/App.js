import logo from "./logo.svg";
import "./App.css";
import ReservaVuelo from "./Components/ReservaVuelo/ReservaVuelo";
import DatosUsu from "./Components/DatosUsu/DatosUsu";
function App() {
  return (
    <div className="App">
      <ReservaVuelo />
      <DatosUsu />
    </div>
  );
}

export default App;

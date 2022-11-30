import logo from "./logo.svg";
import "./App.css";
import ReservaVuelo from "./Components/ReservaVuelo/ReservaVuelo";
import FlightsList from "./Components/FlightsList/FlightsList";
function App() {

  const vuelosIdaAux = ["Vuelo 1", "Vuelo 2"];

  const vuelosVueltaAux = ["VueloVuelta 1", "VueloVuelta 2"];

  return (
    <div className="App">
      <FlightsList vuelosIda={vuelosIdaAux} vuelosVuelta={vuelosVueltaAux}></FlightsList>
      {/* <ReservaVuelo/> */}
    </div>
  );
}

export default App;

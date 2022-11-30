import logo from "./logo.svg";
import "./App.css";
import ReservaVuelo from "./Components/ReservaVuelo/ReservaVuelo";
import FlightsList from "./Components/FlightsList/FlightsList";
function App() {
  return (
    <div className="App">
      <FlightsList></FlightsList>
      {/* <ReservaVuelo/> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import ReservaVuelo from "./components/ReservaVuelo/ReservaVuelo";
import FlightsList from "./components/FlightsList/FlightsList";
function App() {
  return (
    <div className="App">
      {/* <FlightsList></FlightsList> */}
      <ReservaVuelo/>
    </div>
  );
}

export default App;

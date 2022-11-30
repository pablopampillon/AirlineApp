import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import ReservaVuelo from "./Components/ReservaVuelo/ReservaVuelo";
import FlightsList from "./Components/FlightsList/FlightsList";
import DatosUsu from "./Components/DatosUsu/DatosUsu";
function App() {

  const vuelos = ["Vuelo 1", "Vuelo 2"];

  return (
    <div className="App">
      {/* <FlightsList idaVueltaCheck={false} vuelosIda={vuelos} vuelosVuelta={vuelos}></FlightsList> */}
      {/* <ReservaVuelo/> */}
      <ReservaVuelo />
      {/* <DatosUsu /> */}
    </div>
  );
}

export default App;

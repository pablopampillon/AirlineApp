import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import ReservaVuelo from "./Components/ReservaVuelo/ReservaVuelo";
import FlightsList from "./Components/FlightsList/FlightsList";
import DatosUsu from "./Components/DatosUsu/DatosUsu";
function App() {
  // let vuelos;
  const origStr = "Madrid";
  const destStr = "Francia";
  const fecIniStr = "asdf";

  return (
    <div className="App">
      <ReservaVuelo />
      {/* <ReservaVuelo setidaVuelta={setidaVuelta} idaVuelta={idaVuelta} /> */}
      {/* <DatosUsu /> */}
    </div>
  );
}

export default App;

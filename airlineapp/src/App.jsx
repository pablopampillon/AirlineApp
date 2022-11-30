import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import ReservaVuelo from "./Components/ReservaVuelo/ReservaVuelo";
import FlightsList from "./Components/FlightsList/FlightsList";
import DatosUsu from "./Components/DatosUsu/DatosUsu";
function App() {

  let [vuelos, setVuelos] = useState([]);
  // let vuelos;
  const origStr = "Madrid";
  const destStr = "Francia";
  const fecIniStr = "asdf";

  useEffect(() => {
    axios
      .get(`http://localhost:9000/reservas/vuelos/${origStr}/${destStr}/${fecIniStr}`)

      .then(function (response) {
        setVuelos(response.data);
        // vuelos = response.data;
        // console.log("VUELOS: "+vuelos);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Request finalizada");
      });
    }
  )

  return (
    <div className="App">
      {console.log("VUELOS: "+vuelos)}
      <FlightsList idaVueltaCheck={true} vuelosIda={vuelos} vuelosVuelta={vuelos}></FlightsList>
      {/* <ReservaVuelo/> */}
      {/* <ReservaVuelo /> */}
      {/* <DatosUsu /> */}
    </div>
  );
}

export default App;

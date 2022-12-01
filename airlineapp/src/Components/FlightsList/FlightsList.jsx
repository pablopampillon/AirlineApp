import React, { useState } from "react";
import FlightSingle from "./FlightSingle";
import "./FlightsList.css";

const FlightsList = (props) => {
  let [showPassengerForm, setShowPassengerForm] = useState(false);

  function confirmarVuelo() {
    //     // let reserVuelo = {userId: -1, vuelId: props.item.vuelId};

    //     // await axios.post('http://localhost:9000/reservas', reserVuelo);
    if (showPassengerForm) {
      setShowPassengerForm(false);
    } else {
      setShowPassengerForm(true);
    }

    // alert("ShowPassenger: "+ showPassengerForm);
  }

  return (
    <div className="tableFlights">
      <h2>Vuelos ida</h2>
      {/* <p>{props.vuelosIda[0].cOrigen+ "   --->  "+props.vuelosIda[0].cDestino}</p> */}
      {props.vuelosIda.map((vueloIda) => (
        <FlightSingle
          item={vueloIda}
          setConfirm={confirmarVuelo}
        ></FlightSingle>
      ))}
      {props.isChecked && (
        <div>
          <h2>Vuelos vuelta</h2>
          {/* <p>{props.vuelosVuelta[0].cOrigen+ "   <---  "+props.vuelosVuelta[0].cDestino}</p> */}
          {props.vuelosVuelta.map((vueloVuelta) => (
            <FlightSingle
              item={vueloVuelta}
              setConfirm={confirmarVuelo}
            ></FlightSingle>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightsList;

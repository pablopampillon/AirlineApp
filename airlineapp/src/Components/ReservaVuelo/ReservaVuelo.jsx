import React from "react";
import "./ReservaVuelo.css";

const ReservaVuelo = () => {
  let date = new Date();
  function comprobarFec() {
    let fec = document.getElementById("fec1").value;
    let dates = date.toISOString().split("T")[0];
    if (fec < dates) {
      alert("FECHA INTRODUCIDA NO VÁLIDA");
      fec = document.getElementById("fec1").value = dates;
    }
  }
  return (
    <div className="topC2">
      <div>
        <h1>Aerolíneas PX</h1>
      </div>
      <div className="reserv">
        <div className="title1">
          <h2>Reserva Tu Vuelo!</h2>
        </div>
        <div className="fieldset">
          <div className="orig">
            <h3>Selecciona País Origen</h3>
            <select required>
              <option>Madrid</option>
              <option>Barcelona</option>
              <option>Valencia</option>
            </select>
          </div>
          <div className="fecV">
            <h3>Fecha:</h3>
            <input
              type="date"
              onChange={comprobarFec}
              id="fec1"
              required
            ></input>
          </div>

          <div className="dest">
            <h3>Selecciona País Destino</h3>
            <select>
              <option>Madrid</option>
              <option>Barcelona</option>
              <option>Valencia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservaVuelo;

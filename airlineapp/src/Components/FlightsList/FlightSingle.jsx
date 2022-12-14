import axios from "axios";
import React, { useRef, useState } from "react";
import DatosUsu from "../DatosUsu/DatosUsu";
import "./FlightSingle.css";

const airlineLogo = require("./dummy-airline-pic.jpg");

const FlightSingle = (props) => {
  const inputIdFlight = useRef();
  const [w, setW] = useState(false);
  function reservar() {
    setW(true);
  }
  return (
    <div>
      <div className="flightSingleRes">
        <div className="contentFlightRes">
          <div className="row">
            <div className="left">
              <img
                src={airlineLogo}
                alt="airlineLogo"
                className="airlinePic1"
              />{" "}
              <p className="airlineTxt">
                <b>{props.item.company}</b>
              </p>
            </div>

            <div className="right">
              <div className="cornerRight">
                <input
                  type="text"
                  ref={inputIdFlight}
                  className="idFlightTxt"
                  id="idFlightTxt"
                  name="idFlightTxt"
                  value={props.item.vuelId}
                  readOnly
                ></input>
                <button className="reservButton" onClick={reservar}>
                  Reservar
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="fechasDiv">
              <div className="left">
                <label className="dateIniLabel">
                  <b>{"Fecha Salida: "}</b>
                </label>{" "}
                <p className="dateIniRes">
                  <b>{props.item.fecha}</b>
                </p>
              </div>

              <div className="right">
                <label className="dateFinLabel">
                  <b>{"Fecha Llegada: "}</b>
                </label>{" "}
                <p className="dateFinRes">
                  <b>{"24/01/2002"}</b>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label className="lugageCabinLabel">
                <b>{"Equipaje en cabina "}</b>
              </label>{" "}
              <input
                type="checkbox"
                id="lggCabinCheck"
                value="second_checkbox"
              />
            </div>

            <div className="right">
              <div className="priceBox">
                <label className="priceLabel">
                  <b>{"PRECIO "}</b>
                </label>{" "}
                <p className="priceRes">
                  <b>{props.item.precio + " ???"}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {w && <DatosUsu closeW={setW}></DatosUsu>}
    </div>
  );
};

export default FlightSingle;

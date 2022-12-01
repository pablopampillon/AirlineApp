import React from "react";
import "./ReservaVuelo.css";
import { useState } from "react";
const ReservaVuelo = (props) => {
  let date = new Date();
  let [checkBoxClass, setCheckBoxClass] = useState("notClicked");
  function comprobarFec() {
    let fec = document.getElementById("fec1").value;
    let dates = date.toISOString().split("T")[0];
    if (fec < dates) {
      alert("FECHA INTRODUCIDA NO VÁLIDA");
      fec = document.getElementById("fec1").value = dates;
    } else if (props.idaVuelta) {
      let fec2 = document.getElementById("fec2").value;
      if (fec > fec2 || fec == fec2) {
        fec2 = document.getElementById("fec2").value = fec + 1;
        alert("FECHA DE VUELTA INTRODUCIDA NO VÁLIDA");
      }
    }
  }
  function checkValue(e) {
    console.log(e);
    transit();
    console.log(e.target.checked);
    props.setidaVuelta(e.target.checked);
    // console.log(props.idaVuelta);

    // cls = document.getElementsByClassName("fieldset2").className = "fieldset2Click";
  }
  function transit() {
    console.log("LLEGA AQUI");
    const someid = document.querySelector("#fieldset2");
    if (checkBoxClass != "clicked") {
      setCheckBoxClass("clicked");
    } else {
      // cls.classList.toggle("notClicked");
      setCheckBoxClass("notClicked");
    }
  }
  function search() {}
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

        {/* <div>
          <input type={"checkbox"} id="idaV" onClick={checkValue} />
          <label for="idaV">Ida y vuelta</label>
        </div> */}

        <div id="fieldset2" className={checkBoxClass}>
          <div>
            <div className="fecV">
              <h3>
                Selecciona la fecha de la vuelta:{" "}
                <input
                  type="date"
                  onChange={comprobarFec}
                  id="fec2"
                  required
                ></input>
              </h3>
            </div>
            {checkBoxClass == "clicked" && (
              <div>
                <input
                  type={"checkbox"}
                  id="idaV"
                  onClick={checkValue}
                  defaultChecked
                />
                <label for="idaV">Ida y vuelta</label>
              </div>
            )}
          </div>
        </div>

        {checkBoxClass == "notClicked" && (
          <div>
            <input type={"checkbox"} id="ida" onClick={checkValue} />
            <label for="ida">Ida y vuelta</label>
          </div>
        )}
        <div className="buscar">
          <input type="button" onClick={search} value="Buscar" id="buscar" />
        </div>
      </div>
    </div>
  );
};

export default ReservaVuelo;

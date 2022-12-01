import React from "react";
import "./DatosUsu.css";

const DatosUsu = (props) => {
  function closeW() {
    props.closeW(false);
  }
  return (
    <div className="nat1">
      <div className="natC">
        <div className="data">
          <div className="littleCont">
            <div>
              <h2>Inserte datos para la reserva:</h2>
            </div>
            <div className="dataContainer">
              <form>
                <input
                  type="text"
                  placeholder="Inserte el Nombre"
                  required
                ></input>
                <br />
                <input
                  type="text"
                  placeholder="Inserte el Apellido"
                  required
                ></input>
                <br />
                <input
                  type="text"
                  placeholder="Inserte la nacionalidad"
                  required
                ></input>
                <br />
                <input
                  type="text"
                  placeholder="Inserte la edad"
                  required
                ></input>
                <br />
                <input
                  type="text"
                  placeholder="Inserte el correo"
                  required
                ></input>
                <br />
                <input
                  type="text"
                  placeholder="Inserte el DNI/NIF"
                  required
                ></input>
                <br />
                <div className="subm1">
                  <input type="submit" value={"Reservar"} id="closeW"></input>
                  <input type="reset" value={"Reset Data"} id="closeW"></input>
                </div>
              </form>
            </div>
            <input
              type="button"
              value={"Close"}
              onClick={closeW}
              id="closeW"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosUsu;

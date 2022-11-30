import React from "react";
import "./DatosUsu.css";

const DatosUsu = () => {
  return (
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
              <input type="text" placeholder="Inserte la edad" required></input>
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
                <input type="submit" value={"Reservar"}></input>
                <input type="reset" value={"Reset Data"}></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosUsu;

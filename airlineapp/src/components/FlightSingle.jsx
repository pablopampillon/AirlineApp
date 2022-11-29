import React from 'react';
import './FlightSingle.css';

const airlineLogo = require("./dummy-airline-pic.jpg");


const FlightSingle = () => {
    return (
        <div className='flightSingleRes'>
            <div id="contentFlightRes">
                <div className='row'>
                    <div className="left">
                        <img src={airlineLogo} alt="airlineLogo" className="airlinePic1" /> <p className='airlineTxt'><b>{"Iberia"}</b></p>
                    </div>

                    <div className="right">
                        <p className='idFlightTxt'><b>{"XY9834"}</b></p>
                    </div>

                </div>

                <div className='row'>
                    <div className="left">
                        <label className='dateIniLabel'><b>{"Fecha Salida: "}</b></label> <p className='dateIniRes'><b>{"23/01/2002"}</b></p>
                    </div>

                    <div className="right">
                        <label className='dateFinLabel'><b>{"Fecha Llegada: "}</b></label> <p className='dateFinRes'><b>{"24/01/2002"}</b></p>
                    </div>
                    
                </div>

                <div className='row'>
                    <div className="left">
                        <label className='lugageCabinLabel'><b>{"Equipaje en cabina "}</b></label> <input type="checkbox" id="lggCabinCheck" value="second_checkbox"/>
                    </div>

                    <div className="right">
                    <label className='priceLabel'><b>{"PRECIO "}</b></label> <p className='priceRes'><b>{"90$"}</b></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FlightSingle;

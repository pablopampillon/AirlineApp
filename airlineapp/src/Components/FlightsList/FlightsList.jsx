import React, {useState} from 'react';
import FlightSingle from './FlightSingle';
import './FlightsList.css';


const FlightsList = (props) => {
    
    return (
        <div className='tableFlights'>
            <h2>Vuelos ida</h2>
            {/* <p>{props.vuelosIda[0].cOrigen+ "   --->  "+props.vuelosIda[0].cDestino}</p> */}
            {props.vuelosIda
                .map((vueloIda) => (
                    <FlightSingle item={vueloIda}></FlightSingle>
                ))}
            {props.idaVueltaCheck && 
            ( <div>
                <h2>Vuelos vuelta</h2>
                {/* <p>{props.vuelosVuelta[0].cOrigen+ "   <---  "+props.vuelosVuelta[0].cDestino}</p> */}
                {props.vuelosVuelta
                .map((vueloVuelta) => (
                    <FlightSingle item={vueloVuelta}></FlightSingle>
                ))}
              </div>
            )}
            
            
        </div>
    );
}

export default FlightsList;

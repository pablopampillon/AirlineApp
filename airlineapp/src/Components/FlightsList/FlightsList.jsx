import React, {useState} from 'react';
import FlightSingle from './FlightSingle';


const FlightsList = (props) => {
    
    return (
        <div className='tableFlights'>
            <h2>Vuelos ida</h2>
            {props.vuelosIda
                .map((vueloIda) => (
                    <FlightSingle></FlightSingle>
                ))}
            {props.idaVueltaCheck && 
            ( <div>
                <h2>Vuelos vuelta</h2>
                {props.vuelosVuelta
                .map((vueloVuelta) => (
                    <FlightSingle></FlightSingle>
                ))}
              </div>
            )}
            
            
        </div>
    );
}

export default FlightsList;

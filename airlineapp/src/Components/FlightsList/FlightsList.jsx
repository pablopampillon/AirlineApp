import React, {useState} from 'react';
import FlightSingle from './FlightSingle';


const FlightsList = (props) => {
    
    return (
        <div className='tableFlights'>
            <h3>Vuelos ida</h3>
            {props.vuelosIda
                .map((vueloIda) => (
                    <FlightSingle></FlightSingle>
                ))}
            {props.idaVueltaCheck && 
            ( <div>
                <h3>Vuelos vuelta</h3>
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

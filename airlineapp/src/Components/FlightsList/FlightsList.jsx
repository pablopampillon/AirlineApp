import React, {useState} from 'react';
import FlightSingle from './FlightSingle';


const FlightsList = (props) => {
    
    return (
        <div className='tableFlights'>
            <h2>Vuelos ida</h2>
            {props.vuelosIda
                .map((vueloIda) => (
                    <FlightSingle item={vueloIda}></FlightSingle>
                ))}
            {props.idaVueltaCheck && 
            ( <div>
                <h2>Vuelos vuelta</h2>
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

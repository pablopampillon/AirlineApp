import React, {useState} from 'react';
import FlightSingle from './FlightSingle';


const FlightsList = (props) => {

    const [idaYVuelta, setIdaVueltaFlag] = useState(false);

    if(props.idaVueltaCheck){
        setIdaVueltaFlag(true);
    }
    
    return (
        <div className='tableFlights'>
            <h3>Vuelos ida</h3>
            <FlightSingle></FlightSingle>
            <FlightSingle></FlightSingle>

            if (idaYVuelta) {
                 <><h3>Vuelos vuelta</h3>
                 <FlightSingle></FlightSingle>
                 <FlightSingle></FlightSingle></>
            }

            
        </div>
    );
}

export default FlightsList;

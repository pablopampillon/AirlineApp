import React from 'react';
import FlightSingle from './FlightSingle';

const FlightsList = () => {
    return (
        <div className='tableFlights'>
            <h3>Vuelos ida</h3>
            <FlightSingle></FlightSingle>
            <FlightSingle></FlightSingle>

            <h3>Vuelos vuelta</h3>
            <FlightSingle></FlightSingle>
            <FlightSingle></FlightSingle>
        </div>
    );
}

export default FlightsList;

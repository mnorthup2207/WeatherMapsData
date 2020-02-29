import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl'
import './style.css'

const MapCard = (props) => {
    const [viewport, setViewport] = useState({
        latitude: 6.09122,
        Longitude: 153.56928,
        zoom: 2,
        width: '100%',
        height: '100%'
    })
    console.log(`Coming from map index.js ${props}`);
    
    return (
        <ReactMapGl 
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mnorthup/ck77qgble0hy81jp3srsf0trx"
            onViewportChange={(viewport => {
                setViewport(viewport)
            })}
        >
        
        </ReactMapGl>
    )
}

export default MapCard;

import React, { useState, useContext } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl'
import RoomIcon from '@material-ui/icons/Room';
import './style.css'
// import API from '../../utils/RandomAPI'
import CoordinatesContext from '../../utils/CoordinatesContext';

const MapCard = () => {
    const { searchNum, coordinateObj } = useContext(CoordinatesContext);
    const [viewport, setViewport] = useState({
        latitude: 0.6196937975172998,
        Longitude: 12.400679173032485,
        zoom: 1.4519410830830481,
        width: '100%',
        height: '100%'
    })  
    return (
        <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mnorthup/ck77qgble0hy81jp3srsf0trx"
            onViewportChange={(viewport => {
                setViewport(viewport)
            })}
        >
        {coordinateObj ? (coordinateObj.map(item => (
            <Marker
            key={item.key}
            latitude={item.latitude}
            longitude={item.longitude}
        >
        <RoomIcon /> 
        </Marker>
        ))) : (
            <Marker
            key={12345}
            latitude={49.2771852}
            longitude={-0.71916}
        >
            <RoomIcon />
        </Marker>
        )}
        </ReactMapGl>
    )
}

export default MapCard;

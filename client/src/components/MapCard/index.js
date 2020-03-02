import React, { useState, useContext } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl'
import RoomIcon from '@material-ui/icons/Room';
import './style.css'
import CoordinatesContext from '../../utils/CoordinatesContext';
import WeatherData from '../WeatherData/index'
import SelectedContext from '../../utils/SelectedContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const MapCard = () => {
    // modal only info
    const classes = useStyles();
    // getModalStyle is not a pure function, rolls the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    //
    const { coordinateObj } = useContext(CoordinatesContext);
    const [viewport, setViewport] = useState({
        latitude: 0,
        Longitude: 9.555934599642512,
        zoom: 1,
        width: '100%',
        height: '100%'
    })
    const [selectedPoint, setSelectedPoint] = useState({
        key: " ",
        latitude: " ",
        longitude: " ",
    })
    return (
        <>
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
                        <button onClick={(e) => {
                            e.preventDefault();
                            setOpen(true);
                            setSelectedPoint({
                                key: item.key,
                                latitude: item.latitude,
                                longitude: item.longitude,
                            })
                        }}>
                            <RoomIcon />
                        </button>
                    </Marker>
                ))) : null}
            </ReactMapGl>
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <div id="simple-modal-description">
                            <SelectedContext.Provider value={selectedPoint}>
                                <WeatherData />
                            </SelectedContext.Provider>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default MapCard;
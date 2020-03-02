import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapCard from '../MapCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import API from '../../utils/RandomAPI'
import CoordinatesContext from '../../utils/CoordinatesContext';
import NumberContext from '../../utils/NumberContext';
import './style.css'


const useStyles = makeStyles({
    root: {
        minWidth: '50vw',
        minHeight: '50vh',
        maxHeight: '75vh',
        maxWidth: '75vw'
        
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const WeatherCardMap = () => {
    const classes = useStyles();
    const { amount } = useContext(NumberContext);
    // random map points api call
    const [data, setData] = useState({
        coordinateObj: undefined,
    })
    const latitude_longitude = [];
    const finalCoordinates = [];
    useEffect(() => {
        const searchRandomLatLong = () => {
            API.search(amount)
                .then(res => {
                    const coordinates = res.data.data;                    
                    const getRandomInt = () => Math.floor(Math.random() * 7);
                    const minusPlus = ['-', '', '-', '', '-', '', '-', ''];
                    coordinates.map(num => latitude_longitude.push(`${minusPlus[getRandomInt()]}${num}` / 1000));
                    const randomIndex = () => Math.floor(Math.random() * 300000)
                    const randMin = () => Math.floor(Math.random() * (1 - 3))
                    // const randMax = () => Math.floor(Math.random() * 100)
                    const randMultiplyer = () => Math.floor(Math.random() * randMin())
                    latitude_longitude.sort((a, b) => finalCoordinates.push({
                        key: randomIndex(),
                        latitude: a,
                        longitude: b * randMultiplyer()
                    }
                    ));
                    setData({ ...data, coordinateObj: finalCoordinates })
                })
                .catch(err => console.log(err));
        };
        searchRandomLatLong();
    }, [amount]);

    return (
        <Card className={classes.root}>
            <CardContent id="noPadding">
                <CoordinatesContext.Provider value={data}>
                    <MapCard />
                </CoordinatesContext.Provider>
            </CardContent>
        </Card>
    );
};

export default WeatherCardMap;

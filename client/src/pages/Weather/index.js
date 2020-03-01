import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './style.css';
import WeatherCardMap from '../../components/WeatherCardMap';
import API from '../../utils/RandomAPI'
import CoordinatesContext from '../../utils/CoordinatesContext'

const Weather = () => {
    const [data, setData] = useState({
        searchNum: 20,
        coordinateObj: undefined,
    })
    const { searchNum } = data;
            //sm    //lrg
    const latitude_longitude = [];
    const finalCoordinates = [];
    
    useEffect(() => {
        const searchRandomLatLong = () => {
            API.search(searchNum)
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
                            latitude: a ,
                            longitude: b * randMultiplyer()
                        }
                    ));
                    setData({ ...data, coordinateObj: finalCoordinates })
                })
                .catch(err => console.log(err));
        };
        searchRandomLatLong();        
    }, []); 
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <h1>Simple [ Weather | Maps | Data ]</h1>
                <CoordinatesContext.Provider value={data}>
                    <WeatherCardMap />
                </CoordinatesContext.Provider>
            </Container>
        </React.Fragment>
    );
};

export default Weather;
import React, { useContext, useEffect, useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import API from '../../utils/WeatherAPI';
import SelectedContext from '../../utils/SelectedContext';
import APIdb from '../../utils/API';
import Button from '@material-ui/core/Button';

const WeatherCardData = () => {
    const { key, latitude, longitude } = useContext(SelectedContext);
    const lat = latitude
    const lon = longitude
    const api = "&appid=718a19e59fe8c687c0ff168450145d0e&units=imperial"
    const [weather, setWeather] = useState({

    })
    const [click, setClick] = useState(false)
    function loadData() {
        API.getCoordinates()
            .then(res =>
                console.log(res)
            )
            .catch(err => console.log(err));
    };
    const { name, weatherDes, icon, temp, humidity, windSpeed, localRise, localSet, x, y } = weather;
    useEffect(() => {
        const weatherData = () => {
            API.search(lat, lon, api)
                .then(res => {
                    setWeather({
                        name: res.data.name,
                        weatherDes: res.data.weather[0].description,
                        icon: res.data.weather[0].icon,
                        temp: res.data.main.temp,
                        humidity: res.data.main.humidity,
                        windSpeed: res.data.wind.speed,
                        localRise: res.data.sys.sunrise,
                        localSet: res.data.sys.sunset,
                        x: lat,
                        y: lon
                    });
                })
                .catch(err => console.log(err));
        };
        weatherData();
    }, [key, lat, lon]);
    const handleClick = (e) => {
        e.preventDefault();
        setClick(true);
        APIdb.saveCoordinate({
            name,
            weatherDes,
            temp,
            humidity,
            windSpeed,
            localRise,
            localSet,
            lat: x,
            lon: y
        })
            .then(res => loadData())
            .catch(err => console.log(err));
    }
    return (
        <>
            <h1><strong>{name ? name : 'Unknown Location'}</strong></h1>
            <h2>Lat: {latitude} | Lon: {longitude} </h2>
            <h2>Current Weather: {weatherDes}</h2>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={weatherDes} />
            <h2>Temp: {temp}°</h2>
            <h2>Humidity: {humidity}%</h2>
            <h2>Wind Speed: {windSpeed}</h2>
            <h2>Local Sunrise: <Moment unix>{localRise}</Moment></h2>
            <h2>Local Sunset: <Moment unix>{localSet}</Moment></h2>
            <Button variant="contained" onClick={handleClick}>{!click ? "Save Data Points" : "Saved to Database"}</Button>
        </>
    );
};

export default WeatherCardData;
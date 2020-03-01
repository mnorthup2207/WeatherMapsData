import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import API from '../../utils/WeatherAPI';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxHeight: 350,
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

const WeatherCardData = () => {
    const classes = useStyles();
    // API.search(-52.435, 32.744)
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err => console.log(err))
    const API_Key = process.env.API_KEY;
    const lat = -52.435;
    const lon = 32.744;
    const BASEURL = `https://api.openweathermap.org/data/2.5/weather?lat=`
    const shortStr = `&lon=`
    const api = `&appid=${API_Key}`
    console.log(BASEURL + lat + shortStr + lon + api);

    return (
        <Card className={classes.root}>
            <CardContent id="noPadding">
                <h1>Hell Yea Weather Data!!</h1>
            </CardContent>
        </Card>
    );
};

export default WeatherCardData;

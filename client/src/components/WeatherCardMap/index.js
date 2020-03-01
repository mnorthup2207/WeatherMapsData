import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapCard from '../Map'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './style.css'


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

const WeatherCardMap = (props) => {    
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent id="noPadding">
                <MapCard 
                data={props}
                />
            </CardContent>
        </Card>
    );
};

export default WeatherCardMap;

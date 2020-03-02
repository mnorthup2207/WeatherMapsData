import React, { useEffect, useState } from 'react';
import API from '../../utils/API'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import './style.css'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SavedPoints = () => {
    const classes = useStyles();
    const [data, setData] = useState();
    function loadData() {
        API.getCoordinates()
            .then(res =>
                // console.log(res.data)
                setData(res.data)
            )
            .catch(err => console.log(err));
    };
    useEffect(() => {
        loadData();
    }, []);
    function deleteCoordinate(id) {
        API.deleteCoordinate(id)
            .then(res => loadData())
            .catch(err => console.log(err));
    }
    console.log(data);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container direction="row" justify="space-evenly">
                    <Grid item xs={6}>
                        <h1><a href={'/'}>Simple</a> [ Weather | Maps | Data ]</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <h1 id="align"><a href={'/weather'}>Dashboard</a></h1>
                    </Grid>
                </Grid>
                <Grid container justify='space-evenly' item xs={12}>
                    {data ? (data.map(item => (
                        <Grid key={item._id} item xs={12}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <h3><strong>{item.name ? item.name : "Undefined Location"}</strong></h3>
                                    <Grid container direction="row" justify="space-evenly">
                                        <p><strong>Temp:</strong> {item.temp}</p>
                                        <p><strong>Humidity:</strong> {item.humidity}</p>
                                        <p><strong>Date:</strong> <Moment format="MMM Do YY" unix>{item.localRise}</Moment></p>
                                        <p><strong>Lat:</strong> {item.lat}</p>
                                        <p><strong>Lon:</strong> {item.lon}</p>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained"size="small" onClick={() => deleteCoordinate(item._id)}>Delete Data Point</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))) : null}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default SavedPoints;
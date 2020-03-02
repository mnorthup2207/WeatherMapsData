import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './style.css';
import SearchCard from "../../components/Search";

const Weather = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <h1><a href={'/'}>Simple</a> [ Weather | Maps | Data ]</h1>
                <Grid item xs={12}>
                    <SearchCard />
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Weather;
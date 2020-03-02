import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WeatherCardMap from '../WeatherCardMap'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NumberContext from '../../utils/NumberContext';
import './style.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: '85vh'
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
const useStyles1 = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}
));

const SearchCard = () => {
    const classs = useStyles();
    const classes = useStyles1();
    const [num, setNum] = useState({
        amount: ''
    });
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setNum({ amount: event.target.value });
    };
    return (
        <Card className={classs.root} variant="outlined">
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                Select Number of Coordinates
                        </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={num.amount}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                <MenuItem value={40}>Forty</MenuItem>
                                <MenuItem value={50}>Fifty</MenuItem>
                                <MenuItem value={60}>Sixty</MenuItem>
                                <MenuItem value={70}>Seventy</MenuItem>
                                <MenuItem value={80}>Eighty</MenuItem>
                                <MenuItem value={90}>Ninety</MenuItem>
                                <MenuItem value={100}>One Hundred</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <NumberContext.Provider value={num}>
                        <WeatherCardMap />
                    </NumberContext.Provider>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SearchCard;
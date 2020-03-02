const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ageagleDB"
);

const pointSeed = [
    {
        name: "Pryazha",
        weatherDes: "light rain",
        Temp: "35.6",
        Humidity: "93",
        windSpeed: "15.66",
        localRise: "Sun Mar 01 2020 21:44:02 GMT-0700",
        localSet: "Mon Mar 02 2020 08:12:30 GMT-0700"
    },
    {
        name: "Smooth Rock Falls",
        weatherDes: "overcast clouds",
        Temp: "32",
        Humidity: "94",
        windSpeed: "17.22",
        localRise: "Mon Mar 02 2020 05:06:25 GMT-0700",
        localSet: "Mon Mar 02 2020 16:11:10 GMT-0700"
    },
    

];

db.Coordinates
    .remove({})
    .then(() => db.Coordinates.collection.insertMany(pointSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

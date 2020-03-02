const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ageagleDB"
);

const pointSeed = [
    {
        _id: "5e5ccc02737b4655cc942f79",
        name: "El Borma",
        weatherDes: "scattered clouds",
        temp: "71.74",
        humidity: "15",
        windSpeed: "5.5",
        localRise: "1583128480",
        localSet: "1583170080",
        lat: "31.366",
        lon: "7.731",
    },
    {
        _id: "5e5ccca7d7ef2a50e06eab25",
        name: "Severo-Yeniseyskiy",
        weatherDes: "overcast clouds",
        temp: "16.92",
        humidity: "91",
        windSpeed: "10.09",
        localRise: "1583109842",
        localSet: "1583147486",
        lat: "61.613",
        lon: "93.644",
    }
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

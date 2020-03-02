const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coordinatesSchema = new Schema({
    name: { type: String },
    weatherDes: { type: String },
    temp: { type: String },
    humidity: { type: String },
    windSpeed: { type: String },
    localRise: { type: String },
    localSet: { type: String },
    lat: { type: String },
    lon: { type: String },
});

const Coordinates = mongoose.model("Coordinates", coordinatesSchema);

module.exports = Coordinates;

const mongoose = require('mongoose');

const ParkingField = new mongoose.Schema({
    accountId: {type: String, required: true},
    lotName: {type: String, required: true},
    address: {type: Object, required: true},
    coords: {type: Object, required: true},
    no_of_zones: {type: String},
},{timestamps: true})

module.exports = mongoose.model("perkingField", ParkingField);

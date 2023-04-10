const mongoose = require('mongoose');

const dummySensors = new mongoose.Schema({
    serialNumber: {type: String, required: true},
    macAddress: {type: String, required: true},
},{timestamps: true})

module.exports = mongoose.model("dummySensors", dummySensors);

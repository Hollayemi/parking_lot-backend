const mongoose = require('mongoose')

const sensorNode = new mongoose.Schema({
    accountId: {type: String, required: true},
    serialNumber: {type: String, required: true},
    max_num : {type: Number},
    parkingLot: {type: String, required: true},
    sensorZone: {type: String, required: true},
    desc: {type: String},
    freeSpaces: {type: String, default: 0},
    sensorState: {type: String},
},{timestamps: true})

module.exports = mongoose.model("sensorNode", sensorNode);

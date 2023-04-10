const mongoose = require('mongoose');

const Booking = new mongoose.Schema({
    userId: {type: String, required: true},
    lot_id: {type: String, required: true},
    slot_sensor: {type: String, required: true},
    spacesLeft: {type: Number, required: true},
    token: {type: String, required: true},
},{timestamps: true})

module.exports = mongoose.model("Booking", Booking);

const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    token: {type: String},
    hasLot: {type: String, default: null },
},{timestamps: true})

module.exports = mongoose.model("users", Users);

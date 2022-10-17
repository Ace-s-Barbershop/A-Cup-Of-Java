const mongoose = require("mongoose");

const appointment = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },

    time: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("appointment", appointment, "Appointments");
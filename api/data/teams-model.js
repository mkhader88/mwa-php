const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    age: Number
});


const teamSchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    year: Number,
    players: [playerSchema]
});
const Team = mongoose.model("Team", teamSchema, "Teams");
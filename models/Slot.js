const mongoose = require('mongoose');
const { Schema } = mongoose;
const slotSchema = new Schema({
    month: String,
    day: String,
    year: String,
    hour: String,
    minute: String,
    military: Number,
    createdAt: Date
});
module.exports = slotSchema; 
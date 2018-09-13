const mongoose = require('mongoose');
const { Schema } = mongoose;
const slotSchema = new Schema({
    month: Number,
    day: Number,
    year: Number,
    hour: Number,
    minute: Number,
    createdAt: Date
});
module.exports = slotSchema; 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slotSchema = new Schema({
    time: String,
    date: String,
    createdAt: Date
});
 mongoose.model('Slot', slotSchema); 
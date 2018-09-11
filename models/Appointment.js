const mongoose = require('mongoose');
const { Schema } = mongoose;
const SlotSchema = require('./Slot');

const appointmentSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    slots: [SlotSchema],
    createdAt: Date,
    _user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    confirmationSent: { type: Boolean, default: false }
});
 mongoose.model('appointments', appointmentSchema); 
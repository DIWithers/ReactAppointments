const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    slots: {
        type: ObjectId, 
        ref: 'Slot'
    },
    createdAt: Date
});
 mongoose.model('appointments', appointmentSchema); 
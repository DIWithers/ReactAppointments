const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    phone: Number,
    slots: {
        type: ObjectId, 
        ref: 'Slot'
    },
    createdAt: Date
});
 mongoose.model('Appointment', appointmentSchema); 
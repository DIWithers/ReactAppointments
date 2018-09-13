const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Appointment = mongoose.model('appointments');

module.exports = (app) => {
    app.post('/api/appointments', requireLogin, (req, res) => {
        const { name, email, phone, slots } = req.body;
        const appointment = new Appointment({
            name,
            email,
            phone,
        });
    });
};
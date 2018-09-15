const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Appointment = mongoose.model('appointments');

module.exports = (app) => {
    app.post('/api/appointments', requireLogin, async (req, res) => {
        const { name, email, phone, slots } = req.body;
        const appointment = new Appointment({
            name: name,
            email: email,
            phone: phone,
            slots: slots,
            createdAt: Date.now(),
            _user: req.user.id
        });
        appointment.save();
        // Still need to send text, consult Mailer example
    });
};
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Appointment = mongoose.model('appointments');

module.exports = (app) => {
    app.post('/api/appointments', requireLogin, async (req, res) => {
        const { name, email, phone, date, slot } = req.body;
        console.log(req.body);
        MilitaryToStandard = {
            "0000": { hour: 0, min: 0 },
            "0030": { hour: 0, min: 30 },
            "0100": { hour: 1, min: 0 },
            "0130": { hour: 1, min: 30 },
            "0200": { hour: 2, min: 0 },
            "0230": { hour: 2, min: 30 },
            "0300": { hour: 3, min: 0 },
        }
        const appointment = new Appointment({
            name: name,
            email: email,
            phone: phone,
            slots: {
                month: date.months,
                day: date.date,
                year: date.years,
                hour: MilitaryToStandard[slot].hour,
                minute: MilitaryToStandard[slot].min
            },
            createdAt: Date.now(),
            _user: req.user.id
        });
        appointment.save();
        // Still need to send text, consult Mailer example
    });
};
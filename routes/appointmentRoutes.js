const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const MilitaryToStandard = require('../client/src/militaryTimeConversions');

const Appointment = mongoose.model('appointments');

module.exports = (app) => {
    app.get('/api/appointments', requireLogin, async (req, res) => {
        const appointments = await Appointment.find({ _user: req.user.id});
        const orderedAppointments = appointments.sort((a, b) => {
            return a.slots[0].military - b.slots[0].military;
        });
        res.send(orderedAppointments);
    });
    app.post('/api/appointments', requireLogin, async (req, res) => {
        const { name, email, phone, date, slot } = req.body;
        const appointment = new Appointment({
            name: name,
            email: email,
            phone: phone,
            slots: {
                month: date.months,
                day: date.date,
                year: date.years,
                hour: MilitaryToStandard[slot].hour,
                minute: MilitaryToStandard[slot].min,
                military: MilitaryToStandard[slot].military
            },
            createdAt: Date.now(),
            _user: req.user.id
        });
        appointment.save();
        res.redirect('/appointments');
    });
};

        //temporary green confirmation modal
        //start time TO end time?
        // Still need to send text, consult Mailer example
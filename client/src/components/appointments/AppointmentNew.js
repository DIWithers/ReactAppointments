import React, { Component }from 'react';
import AppointmentForm from './AppointmentForm';

class AppointmentNew extends Component {
    render() {
        return (
            <div>
                <div className="level">
                    <div className="level-item"><h1>Create a New Appointment</h1></div>
                </div>
                <AppointmentForm />
            </div>
        );
    }
};
export default AppointmentNew;
import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../Calendar';


class AppointmentNew extends Component {
    render() {
        return (
            <div>
                <Calendar />
                <div className="level">
                    <div className="level-item"><h1>Create a New Appointment</h1></div>
                    <Link to="/appointments" className="button level-left">
                        <span className="icon">
                            <FontAwesomeIcon icon={faArrowCircleLeft} />
                        </span>
                    </Link>
                </div>
                <AppointmentForm />
            </div>
        );
    }
};
export default AppointmentNew;
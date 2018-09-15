import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

class Appointments extends Component {

    render() {
        return (
            <div>
                <Calendar />
                <div className="level">
                    <div className="level-item"><h1>Appointments</h1></div>
                        <Link to="/appointments/new" className="button level-left">
                            <span className="icon">
                                <FontAwesomeIcon icon={faCalendarPlus} />
                            </span>
                        </Link>
                </div>
            </div>

           
        ); 
    }
};
export default Appointments;
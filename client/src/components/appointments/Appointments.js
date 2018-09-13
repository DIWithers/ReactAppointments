import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

const Appointments = () => {
    return (
        <div className="level">
        <div className="level-item">Appointments</div>
            <Link to="/appointments/new" className="button level-right">
                <span className="icon">
                    <FontAwesomeIcon icon={faCalendarPlus} />
                </span>
            </Link>
        </div>
    );
};
export default Appointments;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../Calendar';
import { connect } from 'react-redux';
import { fetchAppointments } from '../../actions';
import timeConversions from '../../militaryTimeConversions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

class Appointments extends Component {

    componentDidMount() {
        this.props.fetchAppointments();
    }

    renderTime(hour, minute) {
        const key = Object.keys(timeConversions).find(key => timeConversions[key].hour == hour && timeConversions[key].min == minute);
        return  "Time: " + timeConversions[key].display;
    }

    renderAppointments() {
        return this.props.appointments.map(appointment => {
            return (
                <div className="card darken-1" key={appointment._id}>
                    <div className="card-content">
                        <p className="subtitle">
                            {appointment.name}
                        </p>
                        <p className="subtitle">
                            {this.renderTime(appointment.slots[0].hour, appointment.slots[0].minute)}
                        </p>
                    </div>
                </div>
            )
        });
    }

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
                {this.renderAppointments()}
            </div>
        ); 
    }
};

function mapStateToProps( { appointments}) {
    return { appointments };
}
export default connect(mapStateToProps, { fetchAppointments })(Appointments);
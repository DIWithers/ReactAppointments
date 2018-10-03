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
        const appointments = this.props.appointments.filter(appointmentDate => {
            const { years, months, date } = this.props.date;
            return appointmentDate.slots[0].year == years && appointmentDate.slots[0].month == months && appointmentDate.slots[0].day == date;
        });
        console.log(appointments);
        if (appointments.length > 0) {
            return appointments.map(appointment => {
                return (
                    <div className="card" key={appointment._id}>
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
        return <p className="subtitle">No Appointments.</p>
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

function mapStateToProps( { appointments, date }) {
    return { appointments, date };
}
export default connect(mapStateToProps, { fetchAppointments })(Appointments);
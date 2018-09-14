import React, { Component } from 'react';
import AppointmentNew from './AppointmentNew';
import AppointmentAll from './AppointmentAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

class Appointments extends Component {
    state = {
        showCreateNewAppt: false
    }
    renderContent() {
        if (this.state.showCreateNewAppt) {
            return (
                <div>
                    <button onClick = { () => this.setState({showCreateNewAppt: false}) } className="button level-right">
                        <span className="icon">
                            <FontAwesomeIcon icon={faArrowCircleLeft} />
                        </span>
                    </button>
                    <AppointmentNew />
                </div>
            );
        }
        return (
            <div>
                <button onClick = { () => this.setState({showCreateNewAppt: true}) } className="button level-right">
                    <span className="icon">
                        <FontAwesomeIcon icon={faCalendarPlus} />
                    </span>
                </button>
                <AppointmentAll />
            </div>
        );
    }
    render() {
        return (
            <div>

                {this.renderContent()}
            </div>
           
        ); 
    }
};
export default Appointments;
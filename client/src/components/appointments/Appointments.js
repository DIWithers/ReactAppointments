import React, { Component } from 'react';
import AppointmentNew from './AppointmentNew';
import AppointmentAll from './AppointmentAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

class Appointments extends Component {
    state = {
        showCreateNewAppt: false
    }
    renderContent() {
        if (this.state.showCreateNewAppt) {
            return <AppointmentNew />;
        }
        return <AppointmentAll onHandleClick={() => this.setState({
            showCreateNewAppt: true
        })} />;
    }
    render() {
        return (
            <div>
                <button onClick = { () => this.setState({showCreateNewAppt: true}) } className="button level-right">
                    <span className="icon">
                        <FontAwesomeIcon icon={faCalendarPlus} />
                    </span>
                </button>
                {this.renderContent()}
            </div>
           
        ); 
    }
};
export default Appointments;
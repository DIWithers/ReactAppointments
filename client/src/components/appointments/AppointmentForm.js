import React, { Component }from 'react';
import { reduxForm, Field } from 'redux-form';
import AppointmentField from './AppointmentField';
import SlotField from './SlotField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class AppointmentForm extends Component {
    constructor(props) {
        super(props);
    }

    renderFields() {
        return (
            <div className="box" style={{width: '50%'}}>
                <Field 
                    label="Available Times" 
                    name="slot" 
                    date={this.props.date} 
                    options={{
                        am: 'AM',
                        pm: 'PM'
                    }} 
                    component={SlotField}/>
                <Field label="Name" type="text" name="name" component={AppointmentField}/>
                <Field label="Email" type="email" name="email" component={AppointmentField}/>
                <Field label="Phone" type="phone" name="phone" component={AppointmentField}/>
            </div>
        );
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => {
                    values.date = this.props.date;
                    this.props.submitAppointment(values);
                    this.props.history.push('/appointments');
                }
                )}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

function validate(values) {
    const errors = {};
    if (!values.name) errors.name = "You must provide a name.";
    if (!values.email) errors.email = "You must provide an email.";
    if (!values.phone) errors.phone = "You must provide a phone number.";
    if (!values.slot) errors.slot = "You must select an appointment time.";

    return errors;
}

function mapStateToProps({date}) {
    return {date};
}

AppointmentForm = connect(mapStateToProps, actions)(withRouter(AppointmentForm));

export default reduxForm({
    validate: validate,
    form: 'appointmentForm'
})(AppointmentForm); 
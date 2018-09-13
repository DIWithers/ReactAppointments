import React, { Component }from 'react';
import { reduxForm, Field } from 'redux-form';
import AppointmentField from './AppointmentField';
import SlotField from './SlotField';
import Calendar from '../Calendar';

class AppointmentNew extends Component {
    renderFields() {
        return (
            <div>
                <Field label="Date" type="text" name="date" component={Calendar}/>
                <Field label="Available Times" name="slot" component={SlotField}/>
                <Field label="Name" type="text" name="name" component={AppointmentField}/>
                <Field label="Email" type="email" name="email" component={AppointmentField}/>
                <Field label="Phone" type="phone" name="phone" component={AppointmentField}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

export default reduxForm({
    validate: validate,
    form: 'appointmentForm'
})(AppointmentNew); 
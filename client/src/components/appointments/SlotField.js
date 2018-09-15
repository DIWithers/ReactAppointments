import React, { Component } from 'react';

class SlotField extends Component {
    render() {
        const slots = [
                 {
                    military: 0,
                    standard: "12:00 AM"
                },
                {
                    military: 30,
                    standard: "12:30 AM"
                },
                {
                    military: 100,
                    standard: "01:00 AM"
                },
                {
                    military: 130,
                    standard: "01:30 AM"
                }
            ]
        let slotOptions =  slots.map((slot) =>
            <option key={slot.military}>{slot.standard}</option>
        );
        return(
            <div>
                <label>{this.props.label}</label>
                <select {...this.props.input}>
                    {slotOptions}
                </select>
            </div> 
        )
    }
}
export default SlotField;
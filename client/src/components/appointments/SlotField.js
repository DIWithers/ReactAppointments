import React, { Component } from 'react';

class SlotField extends Component {
    render() {
        const slots = [
                { military: "0000", standard: "12:00 AM" },
                { military: "0030", standard: "12:30 AM" },
                { military: "0100", standard: "01:00 AM" },
                { military: "0130", standard: "01:30 AM" },
                { military: "0200", standard: "02:00 AM" },
                { military: "0230", standard: "02:30 AM" },
                { military: "0300", standard: "03:00 AM" }
            ]
        let slotOptions =  slots.map((slot) =>
            <option key={slot.military} value={slot.military}>{slot.standard}</option>
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
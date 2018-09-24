import React, { Component } from 'react';
import timeConversions from '../../TimeConversions';

class SlotField extends Component {
    render() {
        const slots = [];
        for (let time in timeConversions) {
            slots.push(time);
        }
        let slotOptions =  slots.map((slot) =>
            <option key={slot} value={slot}>{timeConversions[slot].display}</option>
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
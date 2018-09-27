import React, { Component } from 'react';
import timeConversions from '../../militaryTimeConversions';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class SlotField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meridian: "am",
        }
    }

    onMeridianChange = meridian => {
        this.setState({
            meridian: meridian.meridian
        });
    };
    renderButtons = (meridian, index) => {
        return (
            <label key={`${index}`}>
                <input 
                    {...this.props.input}
                    type="radio"
                    style={{margin: '10px 10px', textAlign: 'center'}}
                    onChange={() => this.onMeridianChange({meridian})}
                    checked={meridian === this.state.meridian || false }
                /> 
                {this.props.options[meridian]}
            </label>
        )
    }

    renderSlots() {
        const slots = [];
        if (this.state.meridian === 'am') {
            for (let time in timeConversions) {
                if (Number(time) < 1200) slots.push(time);
            }
        }
        if (this.state.meridian === 'pm') {
            for (let time in timeConversions) {
                if (Number(time) >= 1200) slots.push(time);
            }
        }
        let sortedSlots = slots.sort();
        let slotOptions =  sortedSlots.map((slot) =>
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
    
    render() {
        return(
            <div>
                <div>
                    {this.props.options && Object.keys(this.props.options).map(this.renderButtons)}
                </div>
                {this.renderSlots()}
            </div> 
        )
    }
}
export default connect(null, actions)(SlotField);

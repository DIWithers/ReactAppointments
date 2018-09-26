import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import * as actions from '../../actions';

class MeridianField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meridian: "am"
        }
    }
    componentDidMount() {
        console.log(this.state.meridian);
        this.props.updateMeridian(this.state.meridian);
    }
    onMeridianChange = meridian => {
        console.log(meridian.meridian);
        this.setState({
            meridian: meridian.meridian
        });
        this.props.updateMeridian(this.state.meridian);
    };
    renderButtons = (meridian, index) => {
        console.log(this.props.meridian);
        return (
            <label key={`${index}`}>
                <input 
                    type="radio"
                    value={meridian}
                    style={{margin: '10px 10px', textAlign: 'center'}}
                    onChange={() => this.onMeridianChange({meridian})}
                    checked={meridian === this.state.meridian}
                /> 
                {this.props.options[meridian]}
            </label>
    
        )
    }
    render() {

        return(
            <div>
                {this.props.options && Object.keys(this.props.options).map(this.renderButtons)}
            </div>
        )
    }
}

function mapStateToProps({ meridian }) {
    return { meridian };
}

export default connect(mapStateToProps, actions)(MeridianField);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import { connect } from 'react-redux';
import { showFullMonth } from '../actions';

class Availability extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.showFullMonth(true);
    }
    render() {
        return (
            <div>
                <Calendar />
                <h1>Availability</h1>
            </div>
        )
    }
}

export default connect(null, { showFullMonth })(Availability);

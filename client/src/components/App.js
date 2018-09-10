import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
const Appointments = () => <h2>Appointments</h2>;
const AppointmentNew = () => <h2>AppointmentNew</h2>;
const Landing = () => <h2>Landing</h2>;
const Clients = () => <h2>Clients</h2>
const ClientNew = () => <h2>ClientNew</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render () {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/appointments" component={Appointments} />
                        <Route exact path="/appointments/new" component={AppointmentNew} />
                        <Route exact path="/clients" component={Clients} />
                        <Route exact path="/clients/new" component={ClientNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};
 
export default connect(null, actions)(App);
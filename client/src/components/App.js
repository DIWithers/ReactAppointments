import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
const AppointmentNew = () => <h2>AppointmentNew</h2>;
const Clients = () => <h2>Clients</h2>
const ClientNew = () => <h2>ClientNew</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/appointments" component={Dashboard} />
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
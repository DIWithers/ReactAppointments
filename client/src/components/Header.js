import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://localhost:3000">
                        <img src={require("../images/calendar.png")} alt="Appointment Setter App" />
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <a href="/auth/google" className="button is-danger">
                            <span className="icon">
                                <FontAwesomeIcon icon={faSignInAlt} />
                            </span>
                            <span>Login With Google</span>
                        </a>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
renderContent() {
    switch (this.props.auth) {
        case null:
            return;
        case false:
            return (
                <div className="navbar-item">
                    <a href="/auth/google" className="button is-danger">
                        <span className="icon">
                            <FontAwesomeIcon icon={faSignInAlt} />
                        </span>
                        <span>Login With Google</span>
                    </a>
                </div>
            )
        default:
            return (
                <div className="navbar-item">
                    <a href="/api/logout" className="button is-danger">
                        <span className="icon">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </span>
                        <span>Logout</span>
                    </a>
                </div>
            )
    }
}

    render() {
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link
                        to={this.props.auth ? '/appointments' : '/'} 
                        className="navbar-item"
                    >
                        <img src={require("../images/calendar.png")} alt="Appointment Setter App" />
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        {this.renderContent()}
                    </div>
                </div>
            </nav>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
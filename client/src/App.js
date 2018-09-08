import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Appointment Setter!</h1>
        </header>
        <a href="/auth/google">SIGN IN WITH GOOGLE</a>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import UserContainer from './Components/UserContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Here is a list of people:
        </p>
        <UserContainer />
      </div>
    );
  }
}

export default App;

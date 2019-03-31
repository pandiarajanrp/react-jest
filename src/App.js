import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from "./LoginComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <LoginComponent />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import img from './IMG_0255_edited-1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <h1 className="App-title">I am Stormy the Pitbull. This is MY app now.</h1>
        </header>
      </div>
    );
  }
}

export default App;

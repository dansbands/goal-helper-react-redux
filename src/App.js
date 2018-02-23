import React, { Component } from 'react';
import img from './img/IMG_0255_edited-1.png';
import './App.css';
import AppContainer from './components/AppContainer';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppContainer />
      </div>
    );
  }
}

export default App;

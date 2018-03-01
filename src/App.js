import React, { Component } from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SignIn />
        <SignUp />
        <AppContainer />
      </div>
    );
  }
}

export default App;

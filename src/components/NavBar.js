import React from 'react';
import img from '../img/IMG_0255_edited-1.png';


class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <h1 className="App-title">I am Stormy the Pitbull. This is MY app now!</h1>
        </header>
      </div>
    )
  }
}

export default NavBar;

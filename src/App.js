import React, { Component } from 'react';
import img from './IMG_0255_edited-1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <h1 className="App-title">I am Stormy the Pitbull. This is MY app now!</h1>
        </header>

        <div className="row">
          <div className="container">
            <div  className="col-xs-4">

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>

            </div>
            <div className="col-xs-8">
              <h1>Goal Coach</h1>
              <div className='form-group'>
                <div className='form-group'>
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" className="form-control" placeholder="Your title here.."></input>
                </div>
              </div>
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="text">Body:</label>
                  <textarea type="text" class="form-control" id="email" rows="8" col="80"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;

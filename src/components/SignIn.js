import React from 'react'

class SignIn extends React.Component {

  render() {
    return (
      <div>
          <div className="container">
            <h1>Sign In</h1>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
            <p className="pull-right">New User? Sign Up Instead</p>
          </div>
      </div>
    )
  }
}

export default SignIn;

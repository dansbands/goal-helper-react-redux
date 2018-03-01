import React from 'react'

class SignUp extends React.Component {

  render() {
    return (
      <div>
          <div className="container">
            <h1>Sign Up</h1>
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
            <p className="pull-right">Already a User? Sign In Instead</p>
          </div>
      </div>
    )
  }
}

export default SignUp;

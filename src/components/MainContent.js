import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class MainContent extends React.Component {
  state = {
    title: "I'm the title",
    body: "I'm the body"
  }

  handleFormChange = (key, value) => {
    console.log('handleFormChange', key, value);
    this.setState({
      [key]: value
    })
  }

  render() {
    console.log('MainContent Props', this.props);
    console.log('MainContent State', this.state);
    return (
      <div className="main-content">
        <h1>Goal Coach</h1>

        <div>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Your title here.."
              value={this.state.title}
              onChange={e => this.handleFormChange(e.target.id, e.target.value)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="text">Body:</label>
            <textarea
              type="text"
              className="form-control"
              id="body"
              rows="8"
              col="80"
              value={this.state.body}
              onChange={e => this.handleFormChange(e.target.id, e.target.value)}/>
          </div>
          <button
            type="submit"
            className="btn btn-default"
            onClick={() => this.props.createGoal(this.state)}>Submit</button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return
// }

export default connect(null, actions)(MainContent);

import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class MainContent extends React.Component {
  state = {
    title: "I'm the title",
    body: "I'm the body",
    id: ''
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentGoal !== nextProps.currentGoal) {
      console.log('Selected Goal', nextProps.currentGoal);
      this.setState({
        title: nextProps.currentGoal.title,
        body: nextProps.currentGoal.body,
        id: nextProps.id
      })
    }
  }

  handleFormChange = (key, value) => {
    console.log('handleFormChange', key, value);
    this.setState({
      [key]: value
    })
  }

  handleFormSubmit = () => {
    if (this.props.currentGoal) {
      this.props.updateGoal(this.state)
    } else {
      this.props.createGoal(this.state)
    }
    this.setState({ title: "", body: "", id: "" })
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
            onClick={this.handleFormSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (state.goals.all) {
    return { currentGoal: state.goals.all[state.goals.selectedGoalId], id: state.goals.selectedGoalId }
  }
}

export default connect(mapStateToProps, actions)(MainContent);

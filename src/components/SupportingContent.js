import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class SupportingContent extends React.Component {
  render() {
    console.log('SupportingContent', this.props);
    let goals = this.props.goals.goals.map((g,i) => {
      return (
        <div key={i} className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{g.title}</h3>
          </div>
          <div className="panel-body">
            {g.body}
          </div>
        </div>
      )
    })


    return (
      <div className="supporting-content">
        {goals}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals,
    currentGoal: state.goals[0]
  }
}

export default connect(mapStateToProps, actions)(SupportingContent);

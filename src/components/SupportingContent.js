import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class SupportingContent extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('SupportingContent nextProps', nextProps);
  //   console.log('SupportingContent nextState', nextState);
  //   return true
  // }
  componentDidMount() {
    this.props.fetchGoals()
  }


  handleClick = (e, id) => {
    if (e.target.className.includes('trash')) {
      console.log('delete');
      this.props.deleteGoal(id)
    } else {
      console.log('click', id);
      this.props.selectGoal(id)
    }
  }

  render() {
    console.log('SupportingContent', this.props);
    let goals
    if (this.props.goals.all.length) {
      goals = this.props.goals.all.map(g => {
        return (
          <div
            key={g.id}
            className="panel panel-default"
            name="card"
            onClick={e => this.handleClick(e, g.id)}>
            <div className="panel-heading">
              <h3 className="panel-title">{g.title}
                <i
                  name="delete"
                  className="glyphicon glyphicon-trash pull-right"></i>
              </h3>
            </div>
            <div className="panel-body">
              {g.body.substring(0,50) + "..."}
            </div>
          </div>
        )
      })
    }

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

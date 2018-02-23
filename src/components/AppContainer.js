import React from 'react';
import MainContent from './MainContent';
import SupportingContent from './SupportingContent';
// import { connect } from 'react-redux';
// import * as actions from '../actions'

class AppContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     currentGoal: {
  //       title: "I'm a title",
  //       body: "I'm the body",
  //     },
  //     goals: [],
  //   }
  // }

  // handleFormChange = (key, value) => {
  //   console.log('handleFormChange', key, value);
  //   this.setState({
  //     currentGoal: {
  //       ...this.state.currentGoal,
  //       [key]: value
  //     }
  //   })
  // }

  // handleFormSubmit = e => {
  //   console.log('Submitting Form', this.state.currentGoal);
  //   this.setState({
  //     goals: [
  //       this.state.currentGoal,
  //       ...this.state.goals
  //     ]
  //   })
  // }

  render() {
    console.log('AppContainer State', this.state);
    console.log('AppContainer props', this.props);
    return(
      <div className="app-container">
        App Container
        <MainContent />
        <SupportingContent />
      </div>
    )
  }
}



export default AppContainer;

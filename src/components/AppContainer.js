import React from 'react';
import MainContent from './MainContent';
import SupportingContent from './SupportingContent';

class AppContainer extends React.Component {
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

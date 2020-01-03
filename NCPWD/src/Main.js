import Splash from './pages/SplashScreen/splashScreen';
import React, {Component} from 'react';
import Routes from './components/Routes';
import Profile from './pages/Profile/profile'
import {connect} from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    setTimeout(() => {
      this.setState({currentScreen: 'Routes'});
    }, 3000);
  }
  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Routes />;
    return mainScreen;
  }
}

export default connect(
  null,
  null,
)(Main);

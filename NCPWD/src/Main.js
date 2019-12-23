import Splash from './components/pages/SplashScreen/splashScreen';
import React, {Component} from 'react';
import Route from './components/Route';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    setTimeout(() => {
      this.setState({currentScreen: 'Login'});
    }, 3000);
  }
  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Route />;
    return mainScreen;
  }
}

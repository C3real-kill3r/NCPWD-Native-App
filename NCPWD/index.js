/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './src/components/SplashScreen/splashScreen';
import React, {Component} from 'react';
import Route from './src/Route';

class Main extends Component {
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

AppRegistry.registerComponent(appName, () => Main);

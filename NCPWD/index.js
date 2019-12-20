/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/components/Authentication/login';
import Profile from './src/components/Profile/profile';
import Splash from './src/components/SplashScreen/splashScreen';
import React, {Component} from 'react';

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
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
    return mainScreen;
  }
}

AppRegistry.registerComponent(appName, () => Main);

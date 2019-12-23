import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import login from './components/Authentication/login';
import signup from './components/Authentication/signup';

export default class Route extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={login} title="Login" initial={true} />
          <Scene key="signup" component={signup} title="Register" />
        </Stack>
      </Router>
    );
  }
}

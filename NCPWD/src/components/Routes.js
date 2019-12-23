import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import login from './pages/Authentication/login';
import signup from './pages/Authentication/signup';

export default class Routes extends Component {
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

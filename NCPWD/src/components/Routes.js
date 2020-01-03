import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import login from '../pages/Login/login';
import signup from '../pages/Signup/signup';
import restPassword from '../pages/ResetPassword/restPassword';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={login} title="Login" initial={true} />
          <Scene key="signup" component={signup} title="Register" />
          <Scene
            key="resetPassword"
            component={restPassword}
            title="ResetPass"
          />
        </Stack>
      </Router>
    );
  }
}

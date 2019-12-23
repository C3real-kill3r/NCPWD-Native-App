/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import store from './src/config/store';
import {Provider} from 'react-redux';
import Main from './src/Main';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="rgba(255, 255, 255, 0.5)"
        />
        <Main />
      </Provider>
    </>
  );
};

export default App;

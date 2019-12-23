/**
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import persist from './src/config/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Main from './src/Main';

const App: () => React$Node = () => {
  const persistStore = persist();

  return (
    <>
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="rgba(255, 255, 255, 0.5)"
          />
          <Main />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, rootMiddleware } from './src/navigators/AppNavigator';
import { loginMiddleware } from './src/navigators/LoginNavigator';
import { walletMiddleware } from './src/navigators/WalletNavigator';

const store = createStore(
  AppReducer,
  applyMiddleware(
    rootMiddleware,
    loginMiddleware,
    walletMiddleware
  )
);

class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import AppReducer from './src/reducers';
import { AppNavigator, middleware, RootNavigator } from './src/navigators/AppNavigator';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(logger, middleware)));

class ReduxExampleApp extends React.Component {
  render() {
    return (
        <RootNavigator />
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const Log = createStackNavigator({
  Login: { screen: LoginScreen }
});

const Wal = createStackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});

const RootNavigator = createSwitchNavigator(
  {
    Log,
    Wal
  }
)

// const RootNavigator = createStackNavigator({
//   Login: { screen: LoginScreen },
//   Main: { screen: MainScreen },
//   Profile: { screen: ProfileScreen },
// });

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };

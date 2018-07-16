import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../components/LoginScreen';

const loginMiddleware = createReactNavigationReduxMiddleware(
  'login',
  state => state.nav
);

const Navigator = createStackNavigator({
  Login: { screen: LoginScreen },
});

const LoginWithNavigationState = reduxifyNavigator(Navigator, 'login');

const mapStateToProps = state => ({
  state: state.nav,
});

const LoginNavigator = connect(mapStateToProps)(LoginWithNavigationState);

export { LoginNavigator, loginMiddleware };

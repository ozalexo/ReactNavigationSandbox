import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSwitchNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { LoginNavigator } from './LoginNavigator'
import { WalletNavigator } from './WalletNavigator'

const rootMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createSwitchNavigator(
  {
    Login: LoginNavigator,
    Wallet: WalletNavigator
  },
  {
    initialRouteName: 'Login'
  }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, rootMiddleware };

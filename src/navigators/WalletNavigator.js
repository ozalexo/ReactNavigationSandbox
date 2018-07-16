import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

const walletMiddleware = createReactNavigationReduxMiddleware(
  'wallet',
  state => state.nav
);

const Navigator = createStackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});

const WalletWithNavigationState = reduxifyNavigator(Navigator, 'wallet');

const mapStateToProps = state => ({
  state: state.nav,
});

const WalletNavigator = connect(mapStateToProps)(WalletWithNavigationState);

export { WalletNavigator, walletMiddleware };

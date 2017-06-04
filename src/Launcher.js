/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './components/Login/Login';
import Feed from './components/Feed/Feed';
import { StackNavigator } from 'react-navigation';

export default class Launcher extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigation } = this.props.navigation;
    return (
      <Login navigation = { navigation }/>
    );
  }
}

/*const ootfit = StackNavigator({
  Main: { screen: Launcher },
  NewsFeed : { screen: Feed },
}); */

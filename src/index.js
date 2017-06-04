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
import Launcher from './Launcher';
import Feed from './components/Feed/Feed';
import { StackNavigator } from 'react-navigation';
import App from './App'
import SecondScreen from './SecondScreen'

export default class ootfit extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigation } = this.props;
    return (
      <App navigation = { navigation }/>
    );
  }
}

const ootfitNavigator = StackNavigator({
  Main: { screen: ootfit },
  NewsFeed : { screen: Feed },
  SecondScreen : { screen: SecondScreen },
});

AppRegistry.registerComponent('ootfit', () => ootfitNavigator);

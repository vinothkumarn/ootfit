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
import { StackNavigator } from 'react-navigation';
import Login from './components/Login/Login';
import Feed from './components/Feed/Feed';
import { DrawerNavigator } from 'react-navigation';

export default class ootfit extends Component {
  static navigationOptions = {
    header: null ,
    title: 'Welcome',
  };
  render() {
    const { navigation } = this.props;
    return (
      <Login navigation = { navigation } />
    );
  }
}

const ootfitSubStackNavigator = StackNavigator({
  Main: { screen: Feed },
},{headerMode: 'screen'});

const ootfitDrawerNavigator = DrawerNavigator({
  NewsFeed : { screen: ootfitSubStackNavigator },
},{
  drawerWidth: 300,
  drawerPosition: 'left',
});

const ootfitWelcomeStackNavigator = StackNavigator({
  Main: { screen: ootfit },
  ootfitDrawerNavigator : { screen: ootfitDrawerNavigator },
},{ headerMode: 'none'});

AppRegistry.registerComponent('ootfit', () => ootfitWelcomeStackNavigator);

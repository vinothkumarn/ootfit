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
  View,
  Image,TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login/Login';
import Feed from './components/Feed/Feed';
import ProductPage from './components/ProductDetails/ProductPage';
import { DrawerNavigator } from 'react-navigation';
import { DrawerItems } from 'react-navigation';

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
  ProductPage: { screen: ProductPage },
});

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <View style={{backgroundColor: '#3498db',height: 100}}>
                <View style={{ flex:1 , flexDirection: 'row',justifyContent: 'center',}}>
                              <Image
                                    source={require('./images/logo.png')}
                                    style={{height:75, width:75, margin: 10 }}
                                  />

                </View>
    </View>
    <View>
        <TouchableOpacity onPress={() => navigateFeed('Main')} style={{backgroundColor: '#bdc3c7',height: 50}}>
        <View style={{ flex:1 , flexDirection: 'row'}}>
                      <Image
                            source={require('./images/home.png')}
                            style={{height:25, width:25, marginTop: 10, marginLeft: 10 }}
                          />
                      <Text style={{
                                height:25,
                                marginTop: 10,
                                marginLeft: 10,
                                fontSize: 20,
                                fontFamily: 'notoserif',
                                opacity: 0.9,
                                fontWeight: 'bold', }} > Home
                      </Text>
        </View>

        </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ootfitDrawerNavigator = DrawerNavigator({
  NewsFeed : { screen: ootfitSubStackNavigator },
},{
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
});

const ootfitWelcomeStackNavigator = StackNavigator({
  Main: { screen: ootfit },
  ootfitDrawerNavigator : { screen: ootfitDrawerNavigator },
},{headerMode: 'none'});

AppRegistry.registerComponent('ootfit', () => ootfitWelcomeStackNavigator);

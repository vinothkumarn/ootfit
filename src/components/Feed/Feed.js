import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Feed extends Component{
  static navigationOptions = {
    title: 'Feed',
  };
  render(){
    return (
       <View style={styles.wrapper}>
          <View>
                <Text style={styles.title}> Welcome to Ootfit Feed</Text>
          </View>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  title:{
    fontSize: 35,
    fontFamily: 'notoserif',
    opacity: 0.9,
    fontWeight: 'bold',
    marginTop: 10
  }
});

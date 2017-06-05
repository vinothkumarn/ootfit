import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


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

const Feed = ()  => {

    return (
       <View style={styles.wrapper}>
          <View>
                <Text style={styles.title}> Welcome to Ootfit Feed</Text>
          </View>
       </View>
    );
  }

Feed.navigationOptions = {
  title: 'Feed',
  header: null,
  drawer: {
      icon: () => (
        <Image
          source={require('../../images/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
};

export default Feed

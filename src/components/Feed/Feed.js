import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';


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

const Feed = (props)  => {

    const { navigate } = props.navigation;
    global.navigateFeed = navigate;
    return (
       <View style={styles.wrapper}>
          <View>
                <Text style={styles.title}> Welcome to Ootfit Feed</Text>
          </View>
       </View>
    );
  }

Feed.navigationOptions = {
  title: 'ootfit',
  headerLeft:
  <TouchableOpacity onPress={() => navigateFeed('DrawerOpen')} style={{height:40, width:40}}>
  <Image
        source={require('../../images/Hamburger_icon.png')}
        style={{height:25, width:25, marginTop: 10, marginLeft: 10 }}
      />
  </TouchableOpacity>,
  headerStyle: {
    backgroundColor:"#3498db",
  },
   headerTitleStyle: {
     color: '#FFF',
     fontSize: 25,
     fontFamily: 'notoserif',
     opacity: 0.9,
     fontWeight: 'bold',
    },
};

export default Feed

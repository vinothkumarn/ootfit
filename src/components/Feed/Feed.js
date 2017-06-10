import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import FeedCardView from './FeedCardView';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ecf0f1',
    flex:1,
    flexDirection: 'column',
    flexWrap: 'wrap'
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
      <View style={{flex: 1}}>
        <View style={styles.wrapper}>
        <FlatList
          data={[
            {key: 'PRO1453', price: '$20', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19085.jpg'},
            {key: 'PRO1454', price: '$10', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19086.jpg'},
            {key: 'PRO1455', price: '$15', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19087.jpg'},
            {key: 'PRO1456', price: '$12', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19088.jpg'},
            {key: 'PRO1457', price: '$18', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19089.jpg'},
            {key: 'PRO1458', price: '$16', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19095.jpg'},
            {key: 'PRO1459', price: '$19', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19096.jpg'},
            {key: 'PRO1450', price: '$27', uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19092.jpg'},
          ]}
          renderItem={({item}) => <FeedCardView item = { item } />}
          numColumns={2}
          columnWrapperStyle={{ margin:10}}
        />
      </View>
      </View>

    );
  }

  Feed.navigationOptions = {
    title: 'Home',
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

import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import FeedCardView from './FeedCardView';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
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
      <FlatList
        data={[
          {key: 'Devin', uri: 'http://g.nordstromimage.com/ImageGallery/store/product/Zoom/10/_10376730.jpg'},
          {key: 'Jackson', uri: 'https://images.asos-media.com/products/boohoo-floral-print-pom-pom-trim-bardot-dress/7883292-1-multi'},
          {key: 'James', uri: 'https://images.asos-media.com/products/boohoo-floral-print-pom-pom-trim-bardot-dress/7883292-1-multi'},
          {key: 'Joel', uri: 'https://images.asos-media.com/products/boohoo-floral-print-pom-pom-trim-bardot-dress/7883292-1-multi'},
          {key: 'John', uri: 'https://images.asos-media.com/products/boohoo-floral-print-pom-pom-trim-bardot-dress/7883292-1-multi'},
          {key: 'Jillian', uri: 'https://images.asos-media.com/products/boohoo-floral-print-pom-pom-trim-bardot-dress/7883292-1-multi'},
          {key: 'Jimmy', uri: 'https://images.asos-media.com/products/boohoo-floral-print-pom-pom-trim-bardot-dress/7883292-1-multi'},
          {key: 'Julie', uri: 'https://img.promgirl.com/_img/PGPRODUCTS/1417606/320/red-ivory-dress-DJ-1435-e.jpg'},
        ]}
        renderItem={({item}) => <FeedCardView item = { item } />}
      />
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

import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';
import { FlatList, StyleSheet,Image,TouchableOpacity } from 'react-native';
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

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    const { navigate } = props.navigation;
    global.navigateFeed = navigate;
  }

  componentDidMount() {
    return fetch('https://s3.eu-central-1.amazonaws.com/ootfit.com/json/feed.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson.products,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static navigationOptions = {
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

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <View style={styles.wrapper}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <FeedCardView item = { item } />}
          numColumns={2}
          columnWrapperStyle={{ margin:10}}
        />
      </View>
      </View>
    );
  }
}

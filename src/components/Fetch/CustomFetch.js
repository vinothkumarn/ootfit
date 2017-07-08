import React, { Component } from 'react';
import { ActivityIndicator, ListView, StyleSheet, Text, View, Image , ScrollView } from 'react-native';

const styles = StyleSheet.create({

  title:{
    fontSize: 25,
    fontFamily: 'notoserif',
    opacity: 1,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },
  price:{
    fontSize: 20,
    fontFamily: 'notoserif',
    opacity: 1,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  }
});

export default class CustomFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      productid: props.screenProps.productid
    }
  }

  componentDidMount() {
    return fetch('https://s3.eu-central-1.amazonaws.com/ootfit.com/json/feed.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.products),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ScrollView >
        { /* <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.price}, {rowData.uri} , { this.state.productid }</Text>}
        />
        <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19085.jpg'}}
        />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        */}
        <View style={{flex: 1 , flexDirection: 'column' , justifyContent: 'center',
        alignItems: 'center', marginTop: 10 , backgroundColor: '#fff' }}>
              <View >
                  <Image
                    style={{width: 350, height: 350}}
                    source={{uri: 'https://s3.eu-central-1.amazonaws.com/visiondata.io/photos/19085.jpg'}}
                  />
                  <View style={{flex: 1}}>
                        <Text style={styles.title}> Izod Slim Mens Tshirt </Text>
                  </View>
                  <View style={{flex: 1}}>
                        <Text style={styles.price}> $82 </Text>
                  </View>
              </View>

        </View>
      </ScrollView>
    );
  }
}

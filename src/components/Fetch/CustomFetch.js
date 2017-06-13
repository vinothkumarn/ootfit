import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

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
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.price}, {rowData.uri} , { this.state.productid }</Text>}
        />
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { TabNavigator } from "react-navigation";
import CustomFetch from '../Fetch/CustomFetch';
import MapView from 'react-native-maps';

const RecentChatsScreen = (props)  => {
    return (
      <View>
      <CustomFetch screenProps={{ productid: props.screenProps.productid }} />
      </View>
    );
  }

const AllContactsScreen = (props)  => {
    return (

      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
        {/* <Text style={styles.title}> Product ID { props.screenProps.productid }</Text> */}
      </View>
    );
  }

const MainScreenNavigator = TabNavigator({
  Details: { screen: RecentChatsScreen },
  Location: { screen: AllContactsScreen },
});

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
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const ProductPage = (props)  => {

    return (
      <View style={{flex: 1}}>
        <View style={styles.wrapper}>
               <MainScreenNavigator screenProps={{ productid: props.navigation.state.params.product }}/>
      </View>
      </View>

    );
  }

  ProductPage.navigationOptions = {
    title: 'Product Details',
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

export default ProductPage

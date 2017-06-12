import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { TabNavigator } from "react-navigation";

const RecentChatsScreen = (props)  => {
    return (
      <Text style={styles.title}> Product ID  { props.screenProps.productid }</Text>
    );
  }

const AllContactsScreen = (props)  => {
    return (
      <Text style={styles.title}> Product ID 2 { props.screenProps.productid }</Text>
    );
  }

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
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
  }
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
    title: 'Details',
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

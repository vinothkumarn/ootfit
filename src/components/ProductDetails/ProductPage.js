import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

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
               <Text style={styles.title}> Product ID : {props.navigation.state.params.product} </Text>
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

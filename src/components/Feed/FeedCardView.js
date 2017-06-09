import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#bdc3c7',
    margin:10,
  },
  title:{
    fontSize: 35,
    fontFamily: 'notoserif',
    opacity: 0.9,
    fontWeight: 'bold',
    marginTop: 10
  }
});

const FeedCardView  = (props)  => {
    return (
        <View style={styles.wrapper}>
           <View>
             <Image source={{uri: props.item.uri}} style={{width: 200, height: 200}}/>
           </View>
           <View>
                 <Text style={styles.title}> {props.item.key}</Text>
           </View>
        </View>
      );
  }


export default FeedCardView

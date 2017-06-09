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
    opacity: 1,
    fontWeight: 'bold',
    marginTop: 5,
  }
});

const FeedCardView  = (props)  => {
    return (
      <View style={{flex: 1, flexDirection: 'row',}}>
           <View style={{flex:1,width: 50, height: 250, backgroundColor: 'powderblue',marginRight:5}}>
                  <TouchableOpacity style={{flex: 1}} title="See Product">
                     <View style={{flex: 1}}>
                         <View style={{flex: 3, backgroundColor: '#bdc'}}>
                             <Image source={{uri: props.item.uri}} style={{width: 200, height: 200}}/>
                         </View>
                         <View style={{flex: 1, backgroundColor: '#bdc3c7'}}>
                               <Text style={styles.title}> {props.item.price}</Text>
                         </View>
                     </View>
                  </TouchableOpacity>
           </View>
      </View>

      );
  }


export default FeedCardView

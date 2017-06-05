import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1abc9c',
    flex: 1,
  },
  logo:{
    width:100,
    height:100
  },
  logoWrapper: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    color: '#FFF',
    fontSize: 35,
    fontFamily: 'notoserif',
    opacity: 0.9,
    fontWeight: 'bold',
    marginTop: 10
  },
  subtitle: {
    color: '#FFF',
    width: 150,
    textAlign: 'center',
    opacity: 0.8,
    fontFamily: 'notoserif',
    marginTop: 10
  },
  bottom: {
    padding: 20
  },
  buttonContainer: {
    backgroundColor: '#16a085',
    padding: 20,
    alignItems: 'center'

  },
  buttonText: {
     color: '#FFF',
     fontSize: 20,
     fontWeight: 'bold',
     opacity: 0.7
  }
});

const Login  = (props)  => {
  const { navigate } = props.navigation;

    return (
       <View style={styles.wrapper}>
          <View style={styles.logoWrapper}>
               <Image
                  style={styles.logo}
                  source={require('../../images/logo.png')}
                  />
                <Text style={styles.title}> Welcome to Ootfit</Text>
                <Text style={styles.subtitle}> Finding fashion stores in your city made simple</Text>
          </View>
          <View style={styles.bottom}>
              <TouchableOpacity onPress={() => navigate('NewsFeed',{ props })} title="Go to Feed" style={styles.buttonContainer}>
                 <Text style={styles.buttonText}> CONTINUE </Text>
              </TouchableOpacity>
          </View>
       </View>
    );
}

/*Login.navigationOptions = {
  drawer: {
      icon: () => (
        <Image
          source={require('../../images/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
}; */

export default Login

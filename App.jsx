import React from 'react';
import {Component} from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';

import StartPage from './screens/StartPage';
import TouchVerification from './screens/TouchVerification.jsx';
import { createStackNavigator } from 'react-navigation';

const ImageHeader = props =>(
    <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View>
)

const myApp = createStackNavigator({
    StartScreen: {
        screen: StartPage
    },
    IDVerificationScreen: {
            screen: TouchVerification
        },
        
    },
    {
        initialRouteName: 'StartScreen',
    }, {
        navigationOptions: {
          headerTitleStyle: { color: '#fff' },
          header: (props) => <ImageHeader {...props} />,
        }
      });

export default myApp;

AppRegistry.registerComponent('rnts', () => myApp);
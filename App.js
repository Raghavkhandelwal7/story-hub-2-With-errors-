import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigaton';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from '/screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
  return (
    <View>
     
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator ({
  Transaction : {screen : TransactionScreen},
  Search : {screen : SearchScreen}
})

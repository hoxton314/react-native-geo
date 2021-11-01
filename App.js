import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from "./components/ListScreen"
import MainScreen from "./components/MainScreen"
import MapScreen from './components/MapScreen';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={MainScreen} options={screenOpt.main} />
          <Stack.Screen name="list" component={ListScreen} options={screenOpt.list} />
          <Stack.Screen name="map" component={MapScreen} options={screenOpt.map} initialParams={{ mapData: 'test'} }/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const screenOpt = {
  list: {
    title: 'Zapis pozycji',
    headerStyle: {
      backgroundColor: '#3f5ca8',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerShown: false
  },
  map: {
    title: 'Map',
    headerStyle: {
      backgroundColor: '#3f5ca8',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerShown: true
  },
  main: {
    title: 'Register Node App',
    headerStyle: {
      backgroundColor: '#3f5ca8',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerShown: false
  },
}

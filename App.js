/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
// import type {Node} from 'react';

import Demo from './src/screens/Demo';
import GetStartedScreen from './src/screens/onBoarding/GetStartedScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Demo" component={Demo} />
        {/* <Stack.Screen name="GetStarted" component={GetStartedScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreen from './Components/TabScreen';


const Stack = createStackNavigator();
function App(){
 
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions= {{ headerShown:false}}>
      <Stack.Screen name="TabScreen" component={TabScreen} />
     
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

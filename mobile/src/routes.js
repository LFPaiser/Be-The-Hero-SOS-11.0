import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Activities from './pages/activities'
import Detail from './pages/detail'


const AppStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOption={{ headerShown: false }}>
        <AppStack.Screen name='Activities' component={Activities} />
        <AppStack.Screen name='Detail' component={Detail} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}

export default Routes;

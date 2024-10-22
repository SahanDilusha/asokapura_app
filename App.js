// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as NavigationBar from 'expo-navigation-bar';
import UserLogin from './screens/UserLogin';

const Drawer = createDrawerNavigator();

export default function App() {

  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden')
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="UserLogin">
        <Drawer.Screen name="UserLogin" component={UserLogin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

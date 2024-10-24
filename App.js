// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as NavigationBar from 'expo-navigation-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import UserLogin from './screens/UserLogin';
import Home from './screens/Home';
import { StatusBar } from 'expo-status-bar';
import Nav from './screens/Nav';

const Drawer = createDrawerNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden')
  }, []);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style={"light"} hidden={true} />
      <Drawer.Navigator initialRouteName="Nav">
        <Drawer.Screen name="UserLogin" component={UserLogin} options={{
          headerShown: false,
          swipeEnabled: false,
        }} />
        <Drawer.Screen name="Home" component={Home} options={{
          headerShown: false,
        }} />
        <Drawer.Screen name="Nav" component={Nav} options={{
          headerShown: false,
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

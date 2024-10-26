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
import Void from './screens/Void';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
      <Drawer.Navigator initialRouteName="Void" >
        <Drawer.Screen name="UserLogin" component={UserLogin} options={{
          headerShown: false,
          swipeEnabled: false,
          drawerItemStyle: {
            display: 'none',
          },
        }} />
        <Drawer.Screen name="Home" component={Home} options={{
          headerShown: false,
          drawerIcon: () => { return <FontAwesome name="home" size={24} color="black" /> },
          drawerContentStyle: {
            backgroundColor: "#000"
          },
          drawerItemStyle: {
            borderBottomStartRadius: 100,
            borderTopStartRadius: 100
          },
          drawerActiveBackgroundColor: "#f77488",
          drawerInactiveBackgroundColor: "#ffffff",
          drawerActiveTintColor: "#000",
        }} />
        <Drawer.Screen name="Void" component={Void} options={{
          headerShown: false,
          drawerIcon: () => { return <FontAwesome name="wpforms" size={24} color="black" /> },
          drawerContentStyle: {
            backgroundColor: "#000"
          },
          drawerItemStyle: {
            borderBottomStartRadius: 100,
            borderTopStartRadius: 100
          },
          drawerActiveBackgroundColor: "#f77488",
          drawerInactiveBackgroundColor: "#ffffff",
          drawerActiveTintColor: "#000",
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

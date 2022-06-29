import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from 'app/screens/Login';
import { StatusBar } from 'react-native';
import Splash from 'app/screens/SplashScreen';
import { StyleSheet, Text, Image } from 'react-native';
import Home from 'app/screens/Home';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const UserDrawerStack = createStackNavigator();
interface IProps {
  theme: Theme;
}


const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

    </AuthStack.Navigator>
  );
};

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />


<Stack.Screen
          name='Home' component={Home}
          options={{ headerShown: false, gestureEnabled: false }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabbarStyle: {
    color: '#6F34FF',
    fontSize: 11,
  },
  unselecttabbarStyle: {
    color: 'gray',
    fontSize: 11,
  },
});

export default App;

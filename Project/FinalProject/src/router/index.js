import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, SignIn, SignUp, Format} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}} //Tidak munculkan header
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Format"
        component={Format}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

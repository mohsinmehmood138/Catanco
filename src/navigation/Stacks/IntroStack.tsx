import React from 'react';
import AppIntro from '../../screens/AppIntro';
import {createStackNavigator} from '@react-navigation/stack';

type AuthStackParamList = {
  AppIntro: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const IntroStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="AppIntro" component={AppIntro} />
    </Stack.Navigator>
  );
};

export default IntroStack;

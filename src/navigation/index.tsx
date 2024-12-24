import React from 'react';
import BottomTabs from './Tabs/BottomTabs';
import AuthStack from './Stacks/AuthStack';
import IntroStack from './Stacks/IntroStack';
import ProfileStack from './Stacks/ProfileStack';
import SplashScreen from '../screens/Auth/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'white',
          border: 'transparent',
        },
      }}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="IntroStack" component={IntroStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="ProfileStack" component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

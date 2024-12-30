import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTopTabs from '../Tabs/HomeTopTabs';
import HomeTab from '../../screens/App/Home/Home';
import DynamicScreen from '../../components/complex/DynamicScreen';

type AuthStackParamList = {
  HomeTopTabs: undefined;
  HomeTab: undefined;
  DynamicScreen: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="HomeTopTabs" component={HomeTopTabs} />
      <Stack.Screen name="DynamicScreen" component={DynamicScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

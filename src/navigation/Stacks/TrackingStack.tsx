import React from 'react';
import TrackingTab from '../../screens/App/Tracking';
import {createStackNavigator} from '@react-navigation/stack';

type AuthStackParamList = {
  TrackingTab: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const TrackingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrackingTab" component={TrackingTab} />
    </Stack.Navigator>
  );
};

export default TrackingStack;

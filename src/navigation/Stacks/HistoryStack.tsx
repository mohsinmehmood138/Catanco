import React from 'react';
import HistoryTab from '../../screens/App/History';
import {createStackNavigator} from '@react-navigation/stack';

type AuthStackParamList = {
    HistoryTab: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HistoryTab" component={HistoryTab} />
    </Stack.Navigator>
  );
};

export default HistoryStack;

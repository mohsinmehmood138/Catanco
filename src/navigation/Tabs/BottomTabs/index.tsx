import React from 'react';
import HomeStack from '../../Stacks/HomeStack';
import HistoryStack from '../../Stacks/HistoryStack';
import TrackingStack from '../../Stacks/TrackingStack';
import Profile from '../../../screens/App/Profile/Profile';
import {BottomTab} from '../../../components/primitive/BottomTabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={BottomTab}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
      <Tab.Screen name="TrackingStack" component={TrackingStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

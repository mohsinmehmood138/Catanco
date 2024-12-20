import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SafeAreaView} from 'react-native';
import HomeStack from '../../Stacks/HomeStack';
import HistoryStack from '../../Stacks/HistoryStack';
import TrackingStack from '../../Stacks/TrackingStack';
import ProfileStack from '../../Stacks/ProfileStack';
import {
  HomeIcon,
  HistoryIcon,
  StaticIcon,
  ProfileIcon,
} from '../../../assets/svg/index';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, size}) => {
          let IconComponent;

          switch (route.name) {
            case 'HomeStack':
              IconComponent = HomeIcon;
              break;
            case 'HistoryStack':
              IconComponent = HistoryIcon;
              break;
            case 'TrackingStack':
              IconComponent = StaticIcon;
              break;
            case 'ProfileStack':
              IconComponent = ProfileIcon;
              break;
            default:
              return null;
          }

          return (
            <SafeAreaView
              style={{
                backgroundColor: focused ? '#FF1654' : 'transparent',
                borderRadius: 50,
                padding: 10,
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                height: 45,
              }}>
              <IconComponent
                width={size}
                height={size}
                fill={focused ? 'white' : 'black'}
              />
            </SafeAreaView>
          );
        },

        tabBarActiveTintColor: 'transparent',
        tabBarInactiveTintColor: 'transparent',
        tabBarPressColor: 'transparent',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          backgroundColor: '#EFEFEF',
        },
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
      <Tab.Screen name="TrackingStack" component={TrackingStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

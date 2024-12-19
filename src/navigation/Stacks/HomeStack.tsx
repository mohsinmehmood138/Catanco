import React from 'react';
import {View} from 'react-native';
import HomeTab from '../BottomTabs/homeTab';
import HistoryTab from '../BottomTabs/historyTab';
import ProfileTab from '../BottomTabs/profileTab';
import TrackingTab from '../BottomTabs/trackingTab';
import {
  HomeIcon,
  HistoryIcon,
  StaticIcon,
  ProfileIcon,
} from '../../assets/svg/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let IconComponent;

          switch (route.name) {
            case 'HomeTab':
              IconComponent = HomeIcon;
              break;
            case 'HistoryTab':
              IconComponent = HistoryIcon;
              break;
            case 'TrackingTab':
              IconComponent = StaticIcon;
              break;
            case 'ProfileTab':
              IconComponent = ProfileIcon;
              break;
            default:
              return null;
          }

          return (
            <View
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
            </View>
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
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="HistoryTab" component={HistoryTab} />
      <Tab.Screen name="TrackingTab" component={TrackingTab} />
      <Tab.Screen name="ProfileTab" component={ProfileTab} />
    </Tab.Navigator>
  );
};

export default HomeStack;

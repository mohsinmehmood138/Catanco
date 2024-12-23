import React from 'react';
import { SafeAreaView } from 'react-native';
import { svgIcon } from '../../../assets/svg';
import { BottomTabBarOptions, Route } from '@react-navigation/bottom-tabs';

type TabIconProps = {
  icon: React.ReactNode;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({ icon, focused }) => (
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
    }}
  >
    {icon}
  </SafeAreaView>
);

type BottomTabProps = {
  route: Route<string>;
};

export const BottomTab = ({ route }: BottomTabProps): BottomTabBarOptions => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    let IconComponent;

    switch (route.name) {
      case 'HomeStack':
        IconComponent = focused ? svgIcon.HomeIcon : svgIcon.HomeIcon1;
        break;
      case 'HistoryStack':
        IconComponent = focused
          ? svgIcon.DocumentsIcon
          : svgIcon.DocumentsIcon1;
        break;
      case 'TrackingStack':
        IconComponent = focused
          ? svgIcon.StatisticsIcon
          : svgIcon.StatisticsIcon1;
        break;
      case 'ProfileStack':
        IconComponent = focused ? svgIcon.ProfileIcon : svgIcon.ProfileIcon1;
        break;
      default:
        return null;
    }

    return <TabIcon icon={IconComponent} focused={focused} />;
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
});

export default TabIcon;

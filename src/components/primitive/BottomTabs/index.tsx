import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {svgIcon} from '../../../assets/svg';
import {BottomTabBarOptions, Route} from '@react-navigation/bottom-tabs';

type TabIconProps = {
  icon: React.ReactNode;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({icon, focused}) => (
  <SafeAreaView
    style={[
      styles.bottomTabsContainer,
      {backgroundColor: focused ? '#FF1654' : 'transparent'},
    ]}>
    {icon}
  </SafeAreaView>
);

type BottomTabProps = {
  route: Route<string>;
};

export const BottomTab = ({route}: BottomTabProps): BottomTabBarOptions => ({
  tabBarIcon: ({focused}: {focused: boolean}) => {
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
  headerShown: false,
  tabBarShowLabel: false,
  tabBarPressColor: 'transparent',
  tabBarActiveTintColor: 'transparent',
  tabBarInactiveTintColor: 'transparent',
  tabBarStyle: {
    height: 70,
    paddingTop: 10,
    backgroundColor: '#EFEFEF',
  },
});

const styles = StyleSheet.create({
  bottomTabsContainer: {
    width: 45,
    height: 45,
    padding: 10,
    marginTop: 10,
    display: 'flex',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabIcon;

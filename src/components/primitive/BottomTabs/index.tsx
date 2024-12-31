import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BottomTabBarOptions, Route} from '@react-navigation/bottom-tabs';
import {svgIcon} from '../../../assets/svg';
import {GLColors, Routes, WP} from '../../../shared/exporter';

type TabIconProps = {
  focused: boolean;
  icon: React.ReactNode;
};

const TabIcon: React.FC<TabIconProps> = ({icon, focused}) => (
  <SafeAreaView
    style={[
      styles.bottomTabsContainer,
      {backgroundColor: focused ? GLColors.Primary.PinkishRed : 'transparent'},
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
      case Routes.HomeTab:
        IconComponent = focused ? svgIcon.HomeIcon : svgIcon.HomeIcon1;
        break;
      case Routes.HistoryTab:
        IconComponent = focused
          ? svgIcon.DocumentsIcon
          : svgIcon.DocumentsIcon1;
        break;
      case Routes.TrackingTab:
        IconComponent = focused
          ? svgIcon.StatisticsIcon
          : svgIcon.StatisticsIcon1;
        break;
      case Routes.Profile:
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
    height: WP('17'),
    paddingTop: WP('2'),
    backgroundColor: GLColors.Natural.LightGrey,
  },
});

const styles = StyleSheet.create({
  bottomTabsContainer: {
    display: 'flex',
    width: WP('12'),
    height: WP('12'),
    padding: WP('2'),
    borderRadius: 50,
    marginTop: WP('2'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabIcon;

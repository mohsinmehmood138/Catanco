import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VisitsScreenTab from '../../../screens/App/Home/TopBarTabs/Visit';
import {GLColors, GLFontsFamily, GLFontSize, WP} from '../../../shared/exporter';
import TeleHealthScreenTab from '../../../screens/App/Home/TopBarTabs/TeleHealth';

const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: GLColors.Natural.White,
          tabBarInactiveTintColor: GLColors.Natural.Black,
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderRadius: 40,
            marginHorizontal: WP('2'),
            shadowColor: 'transparent',
            backgroundColor: GLColors.Natural.White,
          },
          tabBarIndicatorStyle: {
            width: '48%',
            height: '80%',
            borderRadius: 40,
            marginBottom: WP('1'),
            backgroundColor:GLColors.Primary.DarkBlue,
          },
          lazy: false,
          swipeEnabled: true,
          tabBarBounces: false,
          animationEnabled: false,
          tabBarScrollEnabled: false,
          tabBarPressColor: 'transparent',
        }}
        tabBarPosition="top">
        <Tab.Screen
          name="Visits"
          component={VisitsScreenTab}
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text
                style={[
                  styles.tabBarItemText,
                  {color: focused ? color :GLColors.Natural.Black},
                ]}>
                Visit
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="TeleHealthScreen"
          component={TeleHealthScreenTab}
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text
                style={[
                  styles.tabBarItemText,
                  {color: focused ? color :GLColors.Natural.Black},
                ]}>
                TeleHealth
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    flex: 1,
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 40,
    width: WP('70'),
    height: WP('9'),
  },
  tabBarItemText: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_16,
    paddingVertical:WP('2'),
    alignSelf: 'center',
  },
});

export default HomeTopTabs;

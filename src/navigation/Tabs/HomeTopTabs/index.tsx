import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GLFontsFamily, GLFontSize} from '../../../shared/exporter';
import VisitsScreenTab from '../../../screens/App/Home/TopBarTabs/Visit';
import TelehealthScreenTab from '../../../screens/App/Home/TopBarTabs/TeleHealth';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#F8F8F8',
            borderRadius: 40,
            marginHorizontal: 10,
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: 'transparent',
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
            height: 0,
          },
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen
          name="Visits"
          component={VisitsScreenTab}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={[
                  styles.tabBarItem,
                  {
                    backgroundColor: focused ? '#247BA0' : '#F8F8F8',
                    borderRadius: 40,
                  },
                ]}>
                <Text
                  style={[
                    styles.tabBarItemText,
                    {color: focused ? 'white' : 'black'},
                  ]}>
                  Visits
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="TelehealthScreen"
          component={TelehealthScreenTab}
          options={{
            tabBarLabel: ({focused}) => (
              <View
                style={[
                  styles.tabBarItem,
                  {
                    backgroundColor: focused ? '#247BA0' : '#F8F8F8',
                    borderRadius: 40,
                  },
                ]}>
                <Text
                  style={[
                    styles.tabBarItemText,
                    {color: focused ? 'white' : 'black'},
                  ]}>
                  Telehealth
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  tabBarItem: {
    width: 140,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
  },
  tabBarItemText: {
    fontFamily: GLFontsFamily.InterMedium,
    alignSelf: 'center',
    fontSize: GLFontSize.FONT_SIZE_16,
  },
});

export default HomeTopTabs;

import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
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
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#F8F8F8',
            borderRadius: 40,
            marginHorizontal: 10,
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: 'transparent',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#247BA0',
            height: '80%',
            borderRadius: 40,
            marginBottom: 6,
            width: '48%',
          },
          tabBarPressColor: 'transparent',
          lazy: false,
          animationEnabled: false,
          swipeEnabled: true,
          tabBarScrollEnabled: false,
          tabBarBounces: false,
        }}
        tabBarPosition="top">
        <Tab.Screen
          name="Visits"
          component={VisitsScreenTab}
          options={{
            tabBarLabel: ({focused,color}) => (
              <Text style={[styles.tabBarItemText,{color:focused?color:"black"}]}>Visit</Text>
            ),
          }}
        />
        <Tab.Screen
          name="TelehealthScreen"
          component={TelehealthScreenTab}
          options={{
            tabBarLabel: ({focused,color}) => (
              
                <Text style={[styles.tabBarItemText,{color:focused?color:"black"}]}>Telehealth</Text>
             
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
    paddingVertical:12
  },
});

export default HomeTopTabs;

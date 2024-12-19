import React from 'react';
import FAQS from './ProfileScreen/FAQS';
import QrScannerScreen from './QrScanner';
import HomeStack from './Stacks/HomeStack';
import AuthStack from './Stacks/AuthStack';
import IntroStack from './Stacks/IntroStack';
import TobBarStack from './Stacks/TobBarStack';
import ProfileStack from './Stacks/ProfileStack';
import SplashScreen from '../screens/Auth/Splash';
import ManageProfile from './ProfileScreen/manageProfile';
import PrivacyProfile from './ProfileScreen/privacyProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DynamicScreen from '../components/complex/DynamicScreen';
import TermsAndCondition from './ProfileScreen/terms&Condition';
import NotificationScreen from './ProfileScreen/notificationScreen';
import AllNotificationScree from './ProfileScreen/allNotificationScree';


const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'white',
          border:"transparent"
        },
      }}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="IntroStack" component={IntroStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="TobBarStack" component={TobBarStack} />
        <Stack.Screen name="DynamicScreen" component={DynamicScreen} />
        <Stack.Screen name="ProfileStack" component={ProfileStack} />
        <Stack.Screen name="FAQS" component={FAQS} />
        <Stack.Screen name="ManageProfile" component={ManageProfile} />
        <Stack.Screen name="PrivacyProfile" component={PrivacyProfile} />
        <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
        <Stack.Screen name="QrScannerScreen" component={QrScannerScreen} />
       


        
        <Stack.Screen
          name="AllNotificationScree"
          component={AllNotificationScree}
        />

        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

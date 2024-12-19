import React from 'react';
import FAQS from '../ProfileScreen/FAQS';
import ManageProfile from '../ProfileScreen/manageProfile';
import PrivacyProfile from '../ProfileScreen/privacyProfile';
import {createStackNavigator} from '@react-navigation/stack';
import TermsAndCondition from '../ProfileScreen/terms&Condition';
import NotificationScreen from '../ProfileScreen/notificationScreen';

type ProfileStackProps = {
  FAQS: undefined;
  ManageProfile: undefined;
  PrivacyProfile: undefined;
  TermsAndCondition: undefined;
  NotificationScreen: undefined;
};

const Stack = createStackNavigator<ProfileStackProps>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FAQS" component={FAQS} />
      <Stack.Screen name="ManageProfile" component={ManageProfile} />
      <Stack.Screen name="PrivacyProfile" component={PrivacyProfile} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

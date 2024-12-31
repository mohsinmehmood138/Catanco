import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FAQS from '../../screens/App/Profile/FAQS';
import ManageProfile from '../../screens/App/Profile/ManageProfile';
import PrivacyProfile from '../../screens/App/Profile/PrivacyPolicy';
import TermsAndCondition from '../../screens/App/Profile/Terms&Condition';
import Notification from '../../screens/App/Profile/AppNotification/Notification';

type ProfileStackProps = {
  FAQS: undefined;
  Profile: undefined;
  Notification: undefined;
  ManageProfile: undefined;
  PrivacyProfile: undefined;
  TermsAndCondition: undefined;
};

const Stack = createStackNavigator<ProfileStackProps>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FAQS" component={FAQS} />
      <Stack.Screen name="ManageProfile" component={ManageProfile} />
      <Stack.Screen name="PrivacyProfile" component={PrivacyProfile} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

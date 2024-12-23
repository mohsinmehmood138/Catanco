import React from 'react';
import FAQS from '../../screens/App/Profile/FAQS';
import {createStackNavigator} from '@react-navigation/stack';
import ManageProfile from '../../screens/App/Profile/ManageProfile';
import PrivacyProfile from '../../screens/App/Profile/PrivacyPolicy';
import TermsAndCondition from '../../screens/App/Profile/Terms&Condition';
import Notification from '../../screens/App/Profile/AppNotification/Notification';

type ProfileStackProps = {
  FAQS: undefined;
  ManageProfile: undefined;
  PrivacyProfile: undefined;
  TermsAndCondition: undefined;
  Notification: undefined;
 
};

const Stack = createStackNavigator<ProfileStackProps>();

const   UpdatedProifleStack: React.FC = () => {
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

export default UpdatedProifleStack;
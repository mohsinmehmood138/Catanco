import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LogIn from '../../screens/Auth/LogIn';
import SignUp from '../../screens/Auth/SignUp';
import WelcomeScreen from '../../screens/Auth/WelcomeScreen';
import ResetPassword from '../../screens/Auth/ResetPassword';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import OtpVerification from '../../screens/Auth/OTPVerification';
import UserSignUpDetails from '../../screens/Auth/UserSignUpDetail';

type AuthStackParamList = {
  WelcomeScreen: undefined;
  SignUp: undefined;
  userSignUpDetails: undefined;
  LogIn: undefined;
  ForgotPassword: undefined;
  OtpVerification: undefined;
  ResetPassword: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="userSignUpDetails" component={UserSignUpDetails} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;

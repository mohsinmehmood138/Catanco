import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppHeader from '../../../components/complex/AppHeader';
import {GLColors, GLFontsFamily} from '../../../shared/exporter';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const [changeText, setChangeText] = useState('');
  const navigation = useNavigation();

  const OtpVerification = () => {
    navigation.navigate('OtpVerification');
  };

  return (
    <>
      <View style={styles.forgotPasswordContainer}>
        <AppHeader title="Forgot Password" showBackIcon={true} />
        <View style={styles.forgotPasswordText}>
          <Text>
            Please enter your email address we will send you verification code.
          </Text>
        </View>

        <AppInput
          label="Email"
          placeholder="Enter Email"
          onChangeText={setChangeText}
        />
      </View>
      <AppButton
        onPress={OtpVerification}
        color={changeText ? GLColors.Red.R6 : '#D7D7FF'}
        label="Continue"
        width="90%"
      />
    </>
  );
};

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  forgotPasswordText: {
    fontFamily: GLFontsFamily.InterRegular,
    margin: 20,
  },
});
export default ForgotPassword;

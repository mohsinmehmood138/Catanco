import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/complex/AppHeader';
import {GLColors, GLFontsFamily, WP} from '../../../shared/exporter';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';

const ForgotPassword = () => {
  const [changeText, setChangeText] = useState('');
  const navigation = useNavigation();

  const OtpVerification = () => {
    navigation.navigate('OtpVerification');
  };

  return (
    <>
      <SafeAreaView style={styles.forgotPasswordContainer}>
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
      </SafeAreaView>
      <AppButton
        onPress={OtpVerification}
        color={changeText ? GLColors.Primary.PinkishRed : GLColors.Primary.Pale}
        label="Continue"
        width="90%"
      />
    </>
  );
};

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
  forgotPasswordText: {
    fontFamily: GLFontsFamily.InterRegular,
    margin: WP('5'),
  },
});
export default ForgotPassword;

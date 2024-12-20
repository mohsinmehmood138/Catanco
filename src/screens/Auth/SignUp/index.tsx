import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {GLColors} from '../../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import Recaptcha from 'react-native-recaptcha-that-works';
import AppHeader from '../../../components/complex/AppHeader';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';

import {
  signUpValue,
  phoneNumberSchema,
  signUpValidationSchema,
} from '../../../shared/utils/validation';

import {isValidPhoneNumber} from 'libphonenumber-js';

const SignUp = () => {
  const recaptcha = useRef(); // Ref for the Recaptcha
  const navigation = useNavigation();

  const [countryCode, setCountryCode] = useState('PK');
  const [countryCallingCode, setCountryCallingCode] = useState(92);
  const [checkCode, setCheckCode] = useState(false);

  const sendOtpCode = (values: any) => {
    const fullPhoneNumber = `+${countryCallingCode}${values.phoneNumber}`;
    const isValid = isValidPhoneNumber(fullPhoneNumber);
    console.log('Phone Number:', fullPhoneNumber);

    if (isValid) {
      console.log('Phone number is valid.');
      recaptcha.current?.open(); // Trigger Recaptcha verification
    } else {
      console.warn('Invalid phone number.');
    }
  };

  const onVerify = (token: string) => {
    console.log('reCAPTCHA verified successfully! Token:', token);
    alert('CAPTCHA Verified');
    // Proceed to the next step, such as sending OTP
  };

  const onExpire = () => {
    console.warn('reCAPTCHA expired!');
    alert('CAPTCHA Expired! Please retry.');
  };

  const handleChangeCountryCode = (country: any) => {
    setCountryCode(country.cca2);
    setCountryCallingCode(country.callingCode[0]);
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <AppHeader title="Signup" showBackIcon={true} />

        <View style={{marginTop: 20}}>
          <Formik
            initialValues={signUpValue}
            validationSchema={
              checkCode ? signUpValidationSchema : phoneNumberSchema
            }
            onSubmit={!setCheckCode ? handleSignUp : sendOtpCode}>
            {({handleChange, handleSubmit, values, errors}) => (
              <>
                <AppInput
                  selectCountry={true}
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  keyboardType="numeric"
                  onChangeText={handleChange('phoneNumber')}
                  value={values.phoneNumber}
                  errors={errors.phoneNumber}
                  setCountryCode={handleChangeCountryCode}
                  countryCode={countryCode}
                />

                <AppInput
                  label="Enter Code"
                  placeholder="Enter Code"
                  keyboardType="numeric"
                  onChangeText={handleChange('code')}
                  value={values.code}
                  errors={errors.code}
                />

                <Recaptcha
                  ref={recaptcha}
                  siteKey="6LeUb54qAAAAAFG55PhZ6RNO5aenLL7BuotbpqKS"
                  baseUrl="http://localhost" // Or your local development URL
                  onVerify={onVerify}
                  onExpire={onExpire}
                  size="invisible"
                />

                <AppButton
                  color={!errors.phoneNumber ? GLColors.Red.R6 : '#D7D7FF'}
                  label={!checkCode ? 'Continue' : 'Verify OTP'}
                  width="90%"
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {GLColors, WP} from '../../../shared/exporter';
import AppHeader from '../../../components/complex/AppHeader';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';

import {
  signUpValue,
  phoneNumberSchema,
  signUpFormSchema,
} from '../../../shared/utils/validation';

import {isValidPhoneNumber} from 'libphonenumber-js';

const SignUp = () => {
  const navigation = useNavigation();

  const [countryCode, setCountryCode] = useState('PK');
  const [countryCallingCode, setCountryCallingCode] = useState(92);
  const [checkCode] = useState(false);

  const sendOtpCode = (values: any) => {
    const fullPhoneNumber = `+${countryCallingCode}${values.phoneNumber}`;
    const isValid = isValidPhoneNumber(fullPhoneNumber);
    console.log('Phone Number:', fullPhoneNumber);

    if (isValid) {
      console.log('Phone number is valid.');
    } else {
      console.warn('Invalid phone number.');
    }
  };

  const handleChangeCountryCode = (country: any) => {
    setCountryCode(country.cca2);
    setCountryCallingCode(country.callingCode[0]);
  };

  return (
    <SafeAreaView style={styles.sigUpContainer}>
      <AppHeader title="Signup" />

      <KeyboardAvoidingView
        style={styles.inputContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Formik
          initialValues={signUpValue}
          validationSchema={checkCode ? signUpFormSchema : phoneNumberSchema}
          onSubmit={sendOtpCode}>
          {({handleChange, handleSubmit, values, errors}) => (
            <View style={styles.formContainer}>
              <View>
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
              </View>

              <View style={styles.buttonContainer}>
                <AppButton
                  color={
                    !errors.phoneNumber
                      ? GLColors.Primary.PinkishRed
                      : GLColors.Primary.Pale
                  }
                  label={!checkCode ? 'Continue' : 'Verify OTP'}
                  width="90%"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sigUpContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    marginTop: WP('5'),
    justifyContent: 'space-between',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: WP('5'),
  },
  inputContainer: {
    flex: 1,
  },
});

export default SignUp;

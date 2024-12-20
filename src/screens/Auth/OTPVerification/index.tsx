import React, {useEffect, useState} from 'react';
import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  WP,
} from '../../../shared/exporter';
import {OtpInput} from 'react-native-otp-entry';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/complex/AppHeader';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const OtpVerification = () => {
  const [countTimer, setCountTimer] = useState(30);
  const [resendCode, setResendCode] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendCode(true);
          return 0;
        }
        return prev - 1;
      });
      return () => clearInterval(timer);
    }, 1000);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.verficationOTPContainer}>
        <AppHeader title="Verify Email" showBackIcon={true} />

        <Text style={styles.verficationOTPContainerText}>
          Please check your email Tom@example.com. We sent you the verification
          code.
        </Text>

        <View style={{margin: 20}}>
          <OtpInput
            numberOfDigits={6}
            focusColor="transparent"
            autoFocus={false}
            hideStick={true}
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log('Focused')}
            onBlur={() => console.log('Blurred')}
            onTextChange={text => console.log(text)}
            onFilled={() => navigation.navigate('ResetPassword')}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
              pinCodeContainerStyle: styles.pinCodeContainer,

              filledPinCodeContainerStyle: styles.filledPinCodeContainer,
            }}
          />
        </View>
      </SafeAreaView>

      <View style={styles.codeNotReceivedContainer}>
        <Text style={styles.codeNotReceivedText}>Haven’t received code?</Text>
        {resendCode ? (
          <TouchableOpacity>
            <Text style={[styles.codeNotReceivedText, {color: '#247BA0'}]}>
              Resend Code
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={[styles.codeNotReceivedText, {color: '#247BA0'}]}>
            Please wait 00:{countTimer}
          </Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  verficationOTPContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  verficationOTPContainerText: {
    fontFamily: GLFontsFamily.InterRegular,
    margin: 20,
  },
  codeNotReceivedContainer: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
  },
  codeNotReceivedText: {
    alignSelf: 'center',
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_16,
  },

  pinCodeText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: GLFontsFamily.InterBold,
  },
  focusStick: {
    backgroundColor: GLColors.Red.R6,
  },
  activePinCodeContainer: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 14,
  },

  pinCodeContainer: {
    backgroundColor: GLColors.Red.R6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: GLColors.Red.R6,
    width: WP('14%'),
    height: WP('15%'),
  },
  filledPinCodeContainer: {
    backgroundColor: GLColors.Red.R6,
    width: WP('14%'),
    height: WP('15%'),
  },
});

export default OtpVerification;

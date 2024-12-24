import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  WP,
} from '../../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/complex/AppHeader';

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
      <SafeAreaView style={styles.verificationOTPContainer}>
        <AppHeader title="Verify Email" showBackIcon={true} />

        <Text style={styles.verificationOTPContainerText}>
          Please check your email Tom@example.com. We sent you the verification
          code.
        </Text>

        <View style={styles.inputContainer}>
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
            <Text style={[styles.codeNotReceivedText, styles.spanTimerText]}>
              Resend Code
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={[styles.codeNotReceivedText, styles.spanTimerText]}>
            Please wait 00:{countTimer}
          </Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  verificationOTPContainer: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
  verificationOTPContainerText: {
    fontFamily: GLFontsFamily.InterRegular,
    margin: WP('5'),
  },
  codeNotReceivedContainer: {
    width: '100%',
    height: WP('14'),
    backgroundColor: GLColors.Natural.White,
  },
  codeNotReceivedText: {
    alignSelf: 'center',
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_16,
  },

  pinCodeText: {
    color: GLColors.Natural.White,
    fontSize: GLFontSize.FONT_SIZE_30,
    textAlign: 'center',
    fontFamily: GLFontsFamily.InterBold,
  },
  focusStick: {
    backgroundColor: GLColors.Primary.PinkishRed,
  },
  activePinCodeContainer: {
    borderWidth: 2,
    borderRadius: 14,
  },

  pinCodeContainer: {
    backgroundColor: GLColors.Primary.PinkishRed,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: GLColors.Primary.PinkishRed,
    width: WP('14%'),
    height: WP('15%'),
  },
  filledPinCodeContainer: {
    backgroundColor: GLColors.Primary.PinkishRed,
    width: WP('14%'),
    height: WP('15%'),
  },
  spanTimerText: {
    color: GLColors.Primary.DarkBlue,
  },
  inputContainer: {
    margin: WP('5'),
  },
});

export default OtpVerification;

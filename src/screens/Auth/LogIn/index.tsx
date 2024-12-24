import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppInput from '../../../components/primitive/AppInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../components/complex/AppHeader';
import AppButton from '../../../components/primitive/AppButton';
import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  Routes,
  WP,
} from '../../../shared/exporter';

const LogIn = () => {
  const navigation = useNavigation();

  const [changeText, setChangeText] = useState('');
  const [isSelected, setSelection] = useState(false);

  const handleHomeStack = () => {
    navigation.navigate(Routes.BottomTabs);
  };

  return (
    <>
      <SafeAreaView style={styles.loginContainer}>
        <AppHeader title="Login" showBackIcon={true} />
        <View>
          <View style={styles.inputContainer}>
            <AppInput
              label="Email"
              placeholder="Enter Email"
              keyboardType="email-address"
              onChangeText={setChangeText}
            />
            <AppInput
              label="Password"
              placeholder="Enter Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                onPress={() => setSelection(!isSelected)}
                style={styles.customCheckbox}>
                {isSelected && <View style={styles.checkboxTick} />}
              </TouchableOpacity>
              <Text style={styles.label}>Keep me logged-in</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <AppButton
        color={changeText ? GLColors.Primary.PinkishRed : GLColors.Primary.Pale}
        label="Continue"
        width="90%"
        onPress={handleHomeStack}
      />
    </>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: WP('5'),
    borderColor: GLColors.Natural.White,
    borderWidth: 1,
    marginTop: WP('2'),
  },
  forgotPasswordText: {
    fontFamily: GLFontsFamily.InterMedium,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: WP('5'),
    marginLeft: WP('5'),
    alignItems: 'center',
  },
  customCheckbox: {
    width: WP('5'),
    height: WP('5'),
    borderWidth: 2,

    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: WP('2'),
  },

  checkboxTick: {
    width: WP('2'),
    height: WP('2'),
    backgroundColor: GLColors.Natural.White,
    borderRadius: 2,
  },
  label: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_16,
  },
  inputContainer: {
    marginTop: WP('5'),
  },
});

export default LogIn;

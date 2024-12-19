import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import AppHeader from '../../../components/complex/AppHeader';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';
import { GLColors, GLFontsFamily } from '../../../shared/exporter';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogIn = () => {
  const [changeText, setChangeText] = useState('');
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const handleHomeStack = () => {
    navigation.navigate('HomeStack');
  };

  return (
    <>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <AppHeader title="Login" showBackIcon={true} />
        <View>
          <View style={{ marginTop: 20 }}>
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
              <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={setSelection}
                style={{ borderRadius: 50 }}
              />
              <Text style={styles.label}>Keep me logged-in</Text>
            </View>
          </View>
        </View>
      </View>
      <AppButton

        color={changeText ? GLColors.Red.R6 : '#D7D7FF'}
        label="Continue"
        width="90%"
        onPress={handleHomeStack}
      />
    </>
  );
};
const styles = StyleSheet.create({
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 20,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 10,
  },
  forgotPasswordText: {
    fontFamily: GLFontsFamily.InterMedium,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    fontFamily: GLFontsFamily.InterBold,
  },
});
export default LogIn;

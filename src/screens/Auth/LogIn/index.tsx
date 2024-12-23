import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppInput from '../../../components/primitive/AppInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../../components/complex/AppHeader';
import AppButton from '../../../components/primitive/AppButton';
import { GLColors, GLFontsFamily } from '../../../shared/exporter';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LogIn = () => {

  const navigation = useNavigation();

  const [changeText, setChangeText] = useState('');
  const [isSelected, setSelection] = useState(false);

  const handleHomeStack = () => {
    navigation.navigate('BottomTabs');
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
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
              <TouchableOpacity
                onPress={() => setSelection(!isSelected)}
                style={[styles.customCheckbox ]}>
                {isSelected && <View style={styles.checkboxTick} />}
              </TouchableOpacity>
              <Text style={styles.label}>Keep me logged-in</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
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
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  customCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
 
  checkboxTick: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  label: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: 14,
    
  },
});

export default LogIn;

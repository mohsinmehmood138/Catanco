import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GLColors, Routes, WP} from '../../../shared/exporter';
import AppHeader from '../../../components/complex/AppHeader';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';

const ResetPassword = () => {
  const [changeText, setChangeText] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    navigation.navigate(Routes.WelcomeScreen);
  };

  return (
    <>
      <SafeAreaView style={styles.resetPasswordContainer}>
        <AppHeader title="Set New Password" showBackIcon={true} />
        <View style={styles.inputContainer}>
          <AppInput
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={setChangeText}
          />
          <AppInput
            label="Re-Enter Password"
            placeholder="Re-Enter Password"
            secureTextEntry={true}
          />
        </View>
      </SafeAreaView>
      <AppButton
        onPress={handleResetPassword}
        color={changeText ? GLColors.Primary.PinkishRed : GLColors.Primary.Pale}
        width="80%"
        label="Continue"
      />
    </>
  );
};

const styles = StyleSheet.create({
  resetPasswordContainer: {
    flex: 1,
  },
  inputContainer: {
    marginTop: WP('5'),
  },
});
export default ResetPassword;

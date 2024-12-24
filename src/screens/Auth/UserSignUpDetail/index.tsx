import React, {useState} from 'react';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GLColors, WP} from '../../../shared/exporter';
import AppHeader from '../../../components/complex/AppHeader';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';

const UserSignUpDetails = () => {
  const [changeText, setChangeText] = useState('');
  const navigation = useNavigation();

  const userSignUpData = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <>
      <SafeAreaView style={styles.userDetailsContainer}>
        <AppHeader title="Signup" showBackIcon={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.inputContainer}>
          <AppInput
            label="First Name"
            placeholder="Enter First Name"
            keyboardType="default"
            onChangeText={setChangeText}
          />
          <AppInput
            label="Last Name"
            placeholder="Enter Last Name"
            keyboardType="default"
          />
          <AppInput
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <AppInput
            label="Re-Enter Password"
            placeholder="Re-Enter Password"
            secureTextEntry={true}
          />
        </ScrollView>
        <AppButton
          color={
            changeText ? GLColors.Primary.PinkishRed : GLColors.Primary.Pale
          }
          label="Continue"
          width="90%"
          onPress={userSignUpData}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  userDetailsContainer: {
    flex: 1,
  },

  inputContainer: {
    flexGrow: 1,
    paddingTop: WP('5'),
  },
});

export default UserSignUpDetails;

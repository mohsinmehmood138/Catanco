import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {GLColors} from '../../../shared/exporter';
import AppHeader from '../../../components/complex/AppHeader';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';
import {useNavigation} from '@react-navigation/native';

const UserSignUpDetails = () => {
  const [changeText, setChangeText] = useState('');
  const navigation = useNavigation();

  const userSignUpData = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <AppHeader title="Signup" showBackIcon={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingTop: 20}}>
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
          color={changeText ? GLColors.Red.R6 : '#D7D7FF'}
          label="Continue"
          width="90%"
          onPress={userSignUpData}
        />
      </SafeAreaView>
    </>
  );
};

export default UserSignUpDetails;

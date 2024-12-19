import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {GLColors} from '../../../shared/exporter';
import AppHeader from '../../../components/complex/AppHeader';
import AppInput from '../../../components/primitive/AppInput';
import AppButton from '../../../components/primitive/AppButton';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = () => {
  const [changeText, setChangeText] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <AppHeader title="Set New Password" showBackIcon={true} />
        <View style={{marginTop: 20}}>
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
      </View>
      <AppButton
        onPress={handleResetPassword}
        color={changeText ? GLColors.Red.R6 : '#D7D7FF'}
        width="80%"
        label="Continue"
      />
    </>
  );
};
export default ResetPassword;

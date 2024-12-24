import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {appImages, Routes} from '../../../shared/exporter';
import styles from './styles';

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

const Button: React.FC<ButtonProps> = ({onPress, text}) => (
  <TouchableOpacity
    onPress={onPress}
    style={text === 'Sign Up' ? styles.signupButton : styles.loginButton}>
    <Text style={text === 'Sign Up' ? styles.signupText : styles.loginText}>
      {text}
    </Text>
  </TouchableOpacity>
);

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleSignupPress = () => {
    navigation.navigate(Routes.SignUp);
  };

  const handleLoginPress = () => {
    navigation.navigate(Routes.LogIn);
  };

  return (
    <ImageBackground
      source={appImages.gettingStartImage}
      style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, .9)',
            'rgba(112, 193, 179, 0)',
          ]}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          locations={[0, 0.6, 1]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.welcomeScreenContent}>
        <Text style={styles.heading}>Catanco</Text>
        <Text style={styles.description}>Track everything in one place</Text>
      </View>
      <View style={styles.container}>
        <Button onPress={handleLoginPress} text="Log In" />
        <Button onPress={handleSignupPress} text="Sign Up" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

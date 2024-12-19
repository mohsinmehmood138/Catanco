import {Image} from 'react-native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {GLColors} from '../../../shared/exporter';
import {SplashImage} from '../../../shared/exporter';
import {useNavigation} from '@react-navigation/native';


interface SplashProps {
  navigation: any;
}

const SplashScreen = () => {
  const navigation = useNavigation<SplashProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthStack');
    }, 2000);
  }, []);

  return (
    <View style={[styles.splashContainer, {backgroundColor: GLColors.Blue.B2}]}>
      <Image source={SplashImage.splashImage} />
      <Image
        style={styles.splashBottomImage}
        source={SplashImage.splashBottomImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashBottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default SplashScreen;

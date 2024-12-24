import {Image} from 'react-native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {appImages, GLColors, Routes, WP} from '../../../shared/exporter';

interface SplashProps {
  navigation: any;
}

const SplashScreen = () => {
  const navigation = useNavigation<SplashProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.IntroStack);
    }, 2000);
  }, []);

  return (
    <View
      style={[
        styles.splashContainer,
        {backgroundColor: GLColors.Primary.DarkBlue},
      ]}>
      <Image source={appImages.splashImage} />
      <Image
        style={styles.splashBottomImage}
        source={appImages.splashBottomImage}
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
    bottom: WP('0'),
    right: WP('0'),
  },
});

export default SplashScreen;

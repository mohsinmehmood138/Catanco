import {Image} from 'react-native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {appImages, GLColors} from '../../../shared/exporter';


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
    bottom: 0,
    right: 0,
  },
});

export default SplashScreen;

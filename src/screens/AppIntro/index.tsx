import React from 'react';
import {styles} from './styles.tsx';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import {APP_INTRO_SLIDES, RightIcon} from '../../shared/exporter';

const AppIntro: React.FC = () => {
  const navigation: any = useNavigation();

  const renderItem = ({item}: {item: APP_INTRO_SLIDES}) => (
    <View style={[styles.slide]}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <LinearGradient
          colors={[
            item.gradientFirstColor,
            item.gradientSecondColor,
            'rgba(112, 193, 179, 0)',
          ]}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          locations={[0.4, 0.6, 1]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.textContent}>
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={styles.text}>{item.info}</Text>
      </View>
    </View>
  );

  const onDone = () => {
    navigation.replace('AuthStack');
  };

  const onSkip = () => {
    navigation.replace('AuthStack');
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={APP_INTRO_SLIDES}
      onDone={onDone}
      onSkip={onSkip}
      dotStyle={styles.dot}
      showSkipButton={true}
      activeDotStyle={styles.activeDot}
      renderNextButton={() => (
        <View style={styles.nextButton}>
          <RightIcon color="white" width="30" height="30" />
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.nextButton}>
          <RightIcon color="white" width="30" height="30" />
        </View>
      )}
      renderSkipButton={() => <Text style={styles.skipButton}>Skip</Text>}
    />
  );
};

export default AppIntro;

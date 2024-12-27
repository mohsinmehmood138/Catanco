import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSharedState} from '../../../../../hooks';
import {appImages, GLColors} from '../../../../../shared/exporter';
import UserBox from '../../../../../components/primitive/UserBox';
import TodayVisitor from '../../../../../components/complex/TodayVisitor';
import {GLFontsFamily, GLFontSize, WP} from '../../../../../shared/exporter';

const TelehealthScreenTab = () => {
  const {isEnabled}:any = useSharedState();

  return (
    <ScrollView style={styles.teleHealthContainer}>
      {isEnabled ? (
        <>
          <Text style={styles.teleHealthText}>Start Your Call</Text>
          <UserBox type="clickForCall" />
          <TodayVisitor />
        </>
      ) : (
        <>
          <Image
            style={styles.homeTabImages}
            source={appImages.cuateBoxImages}
          />
          <Text style={styles.noVisitorText}>
            No visit done yet. Please start your new visit today.
          </Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  teleHealthContainer: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },

  teleHealthText: {
    marginTop: WP('3'),
    marginLeft: WP('2'),
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  homeTabImages: {
    marginTop: WP('30'),
    alignSelf: 'center',
  },
  noVisitorText: {
    marginTop: WP('2'),
    width: WP('60'),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: GLFontsFamily.InterMedium,
  },
});

export default TelehealthScreenTab;

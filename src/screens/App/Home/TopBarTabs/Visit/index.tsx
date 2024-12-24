import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  GLFontsFamily,
  GLFontSize,
  appImages,
  WP,
  GLColors,
} from '../../../../../shared/exporter';
import {useSharedState} from '../../../../../hooks';
import UserBox from '../../../../../components/primitive/UserBox';
import TodayVisitor from '../../../../../components/complex/TodayVisitor';

const VisitsScreenTab = () => {
  const {isEnabled} = useSharedState();

  return (
    <ScrollView
      style={styles.teleHealthContainer}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.teleHealthText}>Start Your Visit</Text>
      <UserBox type={isEnabled ? 'completeVisit' : 'scanQr'} />
      {isEnabled ? (
        <TodayVisitor />
      ) : (
        <>
          <Image
            style={styles.homeTabImages}
            source={appImages.homeTabImages}
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
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_16,
    marginTop: WP('3'),
    marginLeft: WP('2'),
  },
  homeTabImages: {
    alignSelf: 'center',
    marginTop: WP('10'),
  },
  noVisitorText: {
    fontFamily: GLFontsFamily.InterMedium,
    width: WP('60%'),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: WP('2'),
  },
});

export default VisitsScreenTab;

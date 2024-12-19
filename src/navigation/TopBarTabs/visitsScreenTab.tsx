import {View, Text, Image, StyleSheet,} from 'react-native';
import React from 'react';
import {
  GLFontsFamily,
  GLFontSize,
  HomeTabImages,
  WP,
} from '../../shared/exporter';
import {useSharedState} from '../../Hooks';
import UserBox from '../../components/primitive/UserBox';
import TodayVisitor from '../../components/complex/TodayVisitor';

const VisitsScreenTab = () => {
  const {isEnabled} = useSharedState();

  return (
    <View style={styles.telehealthContainer}>
      <Text style={styles.telehealthText}>Start Your Visit</Text>
      <UserBox type={isEnabled?"completeVisit":"scanQr"} />
      {isEnabled ? (
        <TodayVisitor />
      ) : (
        <View>
          <Image
            style={styles.homeTabImages}
            source={HomeTabImages.homeTabImages}
          />
          <Text style={styles.noVisitorText}>
            No visit done yet. Please start your new visit today.
          </Text>
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  telehealthContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  telehealthText: {
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_16,
    marginTop: 14,
    marginLeft: 10,
  },
  homeTabImages: {
    alignSelf: 'center',
    marginTop: 40,
  },
  noVisitorText: {
    fontFamily: GLFontsFamily.InterMedium,
    width: WP('60%'),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default VisitsScreenTab;

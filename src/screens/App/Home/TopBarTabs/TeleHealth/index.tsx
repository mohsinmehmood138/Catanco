import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSharedState} from '../../../../../hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {appImages} from '../../../../../shared/exporter';
import UserBox from '../../../../../components/primitive/UserBox';
import TodayVisitor from '../../../../../components/complex/TodayVisitor';
import {GLFontsFamily, GLFontSize, WP} from '../../../../../shared/exporter';

const TelehealthScreenTab = () => {
  const {isEnabled} = useSharedState();

  return (
    <ScrollView style={styles.telehealthContainer}>
      {isEnabled ? (
        <>
          <Text style={styles.telehealthText}>Start Your Call</Text>
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
  telehealthContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  telehealthText: {
    marginTop: 14,
    marginLeft: 10,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  homeTabImages: {
    marginTop: 100,
    alignSelf: 'center',
  },
  noVisitorText: {
    marginTop: 10,
    width: WP('60%'),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: GLFontsFamily.InterMedium,
  },
});

export default TelehealthScreenTab;

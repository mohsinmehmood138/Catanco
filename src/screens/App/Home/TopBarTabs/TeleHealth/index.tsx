import React  from 'react';
import { useSharedState } from '../../../../../hooks';
import {View, Text, StyleSheet, Image} from 'react-native';
import { appImages } from '../../../../../shared/exporter';
import UserBox from '../../../../../components/primitive/UserBox';
import TodayVisitor from '../../../../../components/complex/TodayVisitor';
import {GLFontsFamily, GLFontSize, WP} from "../../../../../shared/exporter";


const TelehealthScreenTab = () => {
  const {isEnabled} = useSharedState();

  return (
    <View style={styles.telehealthContainer}>
      {isEnabled ? (
        <>
          <Text style={styles.telehealthText}>Start Your Call</Text>
          <UserBox type="clickForCall" />
          <TodayVisitor />
        </>
      ) : (
        <View
          style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
          <Image
            style={styles.homeTabImages}
            source={appImages.cuateBoxImages}
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

export default TelehealthScreenTab;

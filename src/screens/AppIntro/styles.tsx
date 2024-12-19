import {StyleSheet, Dimensions} from 'react-native';
import {GLColors, WP, GLFontsFamily} from '../../shared/exporter';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({

  slide: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: WP('100%'),
    height: '100%',
    position: 'absolute',
    top: 0,
  },
  textContent: {
    marginTop: height * 0.5,
    width: WP('90%'),
    borderRadius: 10,
    padding: WP('4%'),
  },
  title: {
    fontSize: WP('8.89%'),
    color: '#000',
    textAlign: 'left',
    marginBottom: WP('4%'),
    fontFamily: GLFontsFamily.InterBold,
  },
  text: {
    fontSize: WP('4.1%'),
    color: 'black',
    textAlign: 'left',
    fontFamily: GLFontsFamily.InterRegular,
  },
 
  nextButton: {
    backgroundColor: GLColors.Red.R6,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: WP('3%'),
    width: WP('14%'),
    height: WP('14%'),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    fontSize: WP('4%'),
    fontFamily: 'Inter_18pt-Bold',
    color: GLColors.Red.R6,
    backgroundColor: 'white',
    height: WP('10%'),
    borderRadius: WP('5%'),
    width: WP('17.5%'),
    textAlign: 'center',
    marginTop: WP('2%'),
    paddingTop: WP('2%'),
  },
  activeDot: {
    backgroundColor: GLColors.Red.R6,
  },
  dot: {
    backgroundColor: 'white',
  },
  overlay: {
    width: WP('100%'),
    height: height * 0.7,
    position: 'absolute',
    bottom: 0,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: WP('5%'),
  },
});

import {Platform} from 'react-native';
const {height} = Dimensions.get('window');
import {StyleSheet, Dimensions} from 'react-native';
import {GLColors, WP, GLFontsFamily, HP} from '../../shared/exporter';

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    width: WP('100'),
  },
  image: {
    position: 'absolute',
    width: WP('100'),
    height: HP('100'),
    top: WP('0'),
  },
  textContent: {
    position: 'absolute',
    width: WP('90'),
    borderRadius: 10,
    padding: WP('4'),
    bottom: WP('35'),
  },
  title: {
    fontFamily: GLFontsFamily.InterBold,
    marginBottom: WP('4'),
    textAlign: 'left',
    fontSize: WP('9'),
    color: '#000',
  },
  text: {
    fontSize: WP('4.1'),
    color: 'black',
    textAlign: 'left',
    fontFamily: GLFontsFamily.InterRegular,
  },

  nextButton: {
    backgroundColor: GLColors.Primary.PinkishRed,
    borderColor: GLColors.Natural.White,
    justifyContent: 'center',
    borderRadius: WP('3'),
    alignSelf: 'center',
    alignItems: 'center',
    height: WP('14'),
    width: WP('14'),
    borderWidth: 3,
  },
  nextButtonIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  skipButton: {
    paddingTop: Platform.OS === 'ios' ? WP('2') : 0,
    fontFamily: GLFontsFamily.InterExtraBold,
    backgroundColor: GLColors.Natural.White,
    color: GLColors.Primary.PinkishRed,
    textAlignVertical: 'center',
    borderRadius: WP('5'),
    textAlign: 'center',
    marginTop: WP('2'),
    fontSize: WP('4'),
    height: WP('10'),
    width: WP('17'),
  },

  dot: {
    backgroundColor: GLColors.Natural.White,
  },
  overlay: {
    position: 'absolute',
    width: WP('100'),
    height: HP('50'),
    bottom: WP('0'),
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    backgroundColor: GLColors.Primary.PinkishRed,
  },
});

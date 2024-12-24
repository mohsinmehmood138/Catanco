import {StyleSheet} from 'react-native';
import {GLColors, GLFontsFamily, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    padding: WP('5%'),
    position: 'absolute',
    bottom: WP('5%'),
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupButton: {
    backgroundColor: GLColors.Primary.PinkishRed,
    width: WP('40.5%'),
    height: WP('12%'),
    borderRadius: WP('8%'),
    borderWidth: WP('0.5%'),
    borderColor: GLColors.Primary.PinkishRed,
    marginRight: WP('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: GLColors.Natural.White,
    fontSize: WP('4.5%'),
    fontFamily: GLFontsFamily.InterBold,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'transparent',
    width: WP('40.5%'),
    height: WP('12%'),
    borderRadius: WP('8%'),
    borderWidth: WP('0.5%'),
    borderColor: GLColors.Natural.White,
    marginRight: WP('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: GLColors.Natural.White,
    fontSize: WP('4.5%'),
    fontFamily: GLFontsFamily.InterBold,
    textAlign: 'center',
  },
  overlay: {
    width: '100%',
    height: WP('70%'),
    position: 'absolute',
    bottom: WP('0'),
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeScreenContent: {
    alignItems: 'center',
    position: 'absolute',
    bottom: WP('40%'),
  },
  heading: {
    color: GLColors.Natural.White,
    fontSize: WP('7.5%'),
    fontFamily: GLFontsFamily.InterBold,
    marginBottom: WP('2.5%'),
  },
  description: {
    color: GLColors.Natural.White,
    fontFamily: GLFontsFamily.InterMedium,
    marginBottom: WP('5%'),
  },
});

export default styles;

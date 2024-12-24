import {svgIcon} from '../../../assets/svg';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSharedState} from '../../../hooks';
import React, {useEffect, useState} from 'react';
import {
  appIcons,
  CLICK_FOR_CALL,
  COMPLETE_VISIT,
  GLColors,
  Scan_QR,
} from '../../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import {GLFontsFamily, GLFontSize, WP} from '../../../shared/exporter';
import {Routes} from '../../../shared/exporter';

interface BoxProps {
  type: string;
}

const UserBox: React.FC<BoxProps> = ({type}) => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleNavigate = () => {
    navigation.navigate(Routes.DynamicScreen);
  };

  const {isEnabled} = useSharedState();

  useEffect(() => {
    if (!isEnabled) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      const timer = setInterval(() => {
        setSeconds(prev => {
          if (prev == 59) {
            setMinutes(prev => {
              setSeconds(0);
              if (prev == 59) {
                setHours(prev => {
                  setMinutes(0);
                  return prev + 1;
                });
              }
              return prev + 1;
            });
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isEnabled]);

  const formatTime = (value: any) => String(value).padStart(2, '0');

  let content;
  switch (type) {
    case Scan_QR:
      content = (
        <View style={styles.teleHealthScannerContainer}>
          <Text style={styles.teleHealthText}>New Visit</Text>
          <TouchableOpacity style={styles.scanQrBoxButton}>
            <Text style={styles.scanQrBoxButtonText}>Click to Scan</Text>
            {svgIcon.ArrowLeftIcon}
          </TouchableOpacity>
          <Image style={styles.imageStyle} source={appIcons.qrUserBoxImages} />
        </View>
      );
      break;
    case COMPLETE_VISIT:
      content = (
        <View style={styles.teleHealthScannerContainer}>
          <Text style={styles.teleHealthText}>New Visit</Text>
          <TouchableOpacity
            style={[styles.scanQrBoxButton, styles.timeContainer]}>
            <Text style={styles.scanQrBoxButtonSmallText}>
              {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}{' '}
              Hrs
            </Text>
            <Text style={styles.scanQrBoxButtonSmallText}>Complete Visit</Text>
          </TouchableOpacity>
        </View>
      );
      break;
    case CLICK_FOR_CALL:
      content = (
        <View style={styles.teleHealthScannerContainer}>
          <Text style={styles.teleHealthText}>New Call</Text>
          <TouchableOpacity
            style={styles.scanQrBoxButton}
            onPress={handleNavigate}>
            <Text style={styles.scanQrBoxButtonText}>Click for Call</Text>
            {svgIcon.ArrowLeftIcon}
          </TouchableOpacity>
          <Image style={styles.imageStyle} source={appIcons.vectorBoxImages} />
        </View>
      );
      break;
    default:
      content = (
        <View style={styles.teleHealthScannerContainer}>
          <Text style={styles.teleHealthText}>Default Case</Text>
        </View>
      );
      break;
  }

  return <View> {content}</View>;
};

const styles = StyleSheet.create({
  teleHealthScannerContainer: {
    height: WP('30'),
    padding: WP('3'),
    marginTop: WP('5'),
    width: '100%',
    borderRadius: WP('5'),
    backgroundColor: GLColors.Primary.Pale,
  },
  teleHealthText: {
    marginTop: WP('2'),
    marginLeft: WP('4'),
    fontSize: GLFontSize.FONT_SIZE_18,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  scanQrBoxButton: {
    height: WP('12'),
    marginTop: WP('3'),
    borderRadius: 40,
    width: WP('50'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: GLColors.Primary.DarkBlue,
  },
  scanQrBoxButtonText: {
    color: GLColors.Natural.White,
    marginRight: WP('2'),
    textAlign: 'center',
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterBold,
  },
  scanQrBoxButtonSmallText: {
    color: GLColors.Natural.White,
    textAlign: 'center',
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.InterMedium,
  },
  imageStyle: {
    position: 'absolute',
    right: WP('5'),
    top: WP('5'),
  },
  timeContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});

export default UserBox;

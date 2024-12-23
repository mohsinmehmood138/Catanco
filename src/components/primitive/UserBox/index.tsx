import {svgIcon} from '../../../assets/svg';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSharedState} from '../../../hooks';
import React, {useEffect, useState} from 'react';
import {appIcons} from '../../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import {GLFontsFamily, GLFontSize, WP} from '../../../shared/exporter';

interface BoxProps {
  type: string;
}

const UserBox: React.FC<BoxProps> = ({type}) => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleNavigate = () => {
    navigation.navigate('DynamicScreen');
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
    case 'scanQr':
      content = (
        <View style={styles.telehealthScannerContainer}>
          <Text style={[styles.telehealthText, {marginLeft: 20}]}>
            New Visit
          </Text>
          <TouchableOpacity style={styles.scanQrBoxButton}>
            <Text style={[styles.scanQrBoxButtonText, {marginRight: 10}]}>
              Click to Scan
            </Text>
            {svgIcon.ArrowLeftIcon}
          </TouchableOpacity>
          <Image style={styles.imageStyle} source={appIcons.qrUserBoxImages} />
        </View>
      );
      break;
    case 'completeVisit':
      content = (
        <View style={styles.telehealthScannerContainer}>
          <Text style={[styles.telehealthText, {marginLeft: 20}]}>
            New Visit
          </Text>
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
    case 'clickForCall':
      content = (
        <View style={styles.telehealthScannerContainer}>
          <Text style={[styles.telehealthText, {marginLeft: 20}]}>
            New Call
          </Text>
          <TouchableOpacity
            style={styles.scanQrBoxButton}
            onPress={handleNavigate}>
            <Text style={[styles.scanQrBoxButtonText, {marginRight: 10}]}>
              Click for Call
            </Text>
            {svgIcon.ArrowLeftIcon}
          </TouchableOpacity>
          <Image style={styles.imageStyle} source={appIcons.vectorBoxImages} />
        </View>
      );
      break;
    default:
      content = (
        <View style={styles.telehealthScannerContainer}>
          <Text style={styles.telehealthText}>Default Case</Text>
        </View>
      );
      break;
  }

  return <View> {content}</View>;
};

const styles = StyleSheet.create({
  telehealthScannerContainer: {
    height: 116,
    padding: 10,
    marginTop: 20,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#D7D7FF',
  },
  telehealthText: {
    marginTop: 10,
    fontSize: GLFontSize.FONT_SIZE_18,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  scanQrBoxButton: {
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 40,
    width: WP('50%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#247BA0',
    borderColor: 'transparent',
  },
  scanQrBoxButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterBold,
  },
  scanQrBoxButtonSmallText: {
    color: 'white',
    textAlign: 'center',
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.InterMedium,
  },
  imageStyle: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  timeContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});

export default UserBox;

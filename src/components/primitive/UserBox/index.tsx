import {useSharedState} from '../../../Hooks';
import React, {useEffect, useState} from 'react';
import {LeftArrowIcon} from '../../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {HomeTabImages} from '../../../shared/exporter';
import {GLFontsFamily, GLFontSize, WP} from '../../../shared/exporter';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

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
          <TouchableOpacity style={styles.scanQrBoxButton} onPress={()=>navigation.navigate('QrScannerScreen')}>
            <Text style={[styles.scanQrBoxButtonText, {marginRight: 10}]} >
              Click to Scan
            </Text>
            <LeftArrowIcon />
          </TouchableOpacity>
          <Image
            style={styles.imageStyle}
            source={HomeTabImages.qrUserBoxImages}
          />
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
            style={[
              styles.scanQrBoxButton,
              {width: '90%', alignSelf: 'center', flexDirection: 'column'},
            ]}>
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
            <LeftArrowIcon />
          </TouchableOpacity>
          <Image
            style={styles.imageStyle}
            source={HomeTabImages.vectorBoxImages}
          />
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
    width: '100%',
    height: 116,
    borderRadius: 20,
    backgroundColor: '#D7D7FF',
    marginTop: 20,
    padding: 10,
  },
  telehealthText: {
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_18,
    marginTop: 10,
  },
  scanQrBoxButton: {
    width: WP('50%'),
    backgroundColor: '#247BA0',
    height: 45,
    borderRadius: 40,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: 'transparent',
  },
  scanQrBoxButtonText: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_16,
    color: 'white',
    textAlign: 'center',
  },
  scanQrBoxButtonSmallText: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_12,
    color: 'white',
    textAlign: 'center',
  },
  imageStyle: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default UserBox;

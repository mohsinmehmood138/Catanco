import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  SCAN_QR,
  appIcons,
  GLColors,
  CLICK_FOR_CALL,
  COMPLETE_VISIT,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';
import AppBottomSheet from '../BottomSheet';
import {useSharedState} from '../../../hooks';
import {Routes} from '../../../shared/exporter';
import {usePaymentSheet} from '../../../hooks/usePaymentStripe';
import {GLFontsFamily, GLFontSize, WP} from '../../../shared/exporter';

interface BoxProps {
  type: string;
}

const UserBox: React.FC<BoxProps> = ({type}) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<any>();

  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const {handleGenerateToken, cardComplete} = usePaymentSheet();

  const handleNavigate = () => {
    navigation.navigate(Routes.DynamicScreen);
  };

  const {isEnabled}: any = useSharedState();

  useEffect(() => {
    if (!isEnabled) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      const timer = setInterval(() => {
        setSeconds(prev => {
          if (prev === 59) {
            setMinutes(prev => {
              setSeconds(0);
              if (prev === 59) {
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
    case SCAN_QR:
      content = (
        <View style={styles.teleHealthScannerContainer}>
          <Text style={styles.teleHealthText}>New Visit</Text>

          <TouchableOpacity
            style={styles.scanQrBoxButton}
            onPress={() => {
              bottomSheetRef.current.open();
            }}>
            <Text style={styles.scanQrBoxButtonText}>Click to Pay</Text>

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

  return (
    <View>
      {content}
      <AppBottomSheet
        type="appPayment"
        appBottomText="Confirm Payment"
        bottomSheetHeader="Enter Card Details"
        refRBSheet={bottomSheetRef}
        bottomSheetHeight={WP('50')}
        onPress={handleGenerateToken}
        cardComplete={cardComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  teleHealthScannerContainer: {
    width: '100%',
    padding: WP('3'),
    height: WP('30'),
    marginTop: WP('5'),
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
    width: WP('50'),
    height: WP('12'),
    borderRadius: 40,
    marginTop: WP('3'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: GLColors.Primary.DarkBlue,
  },
  scanQrBoxButtonText: {
    textAlign: 'center',
    marginRight: WP('2'),
    color: GLColors.Natural.White,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterBold,
  },
  scanQrBoxButtonSmallText: {
    textAlign: 'center',
    color: GLColors.Natural.White,
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
  card: {
    color: GLColors.Natural.Black,
    backgroundColor: GLColors.Natural.White,
  },
  cardContainer: {
    height: WP('15'),
    marginVertical: WP('10'),
  },
});

export default UserBox;

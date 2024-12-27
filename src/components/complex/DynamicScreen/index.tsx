import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
 import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  WP,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';
import AppBottomSheet from '../../primitive/BottomSheet';

const formatTime = (value: any) => String(value).padStart(2, '0');

const DynamicScreen = () => {
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [callTimer, setCallTimer] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const refRBSheet = useRef<RBSheet>(null);

  const startCall = () => {
    if (phoneNumber.length >= 11) {
      setCallTimer(true);
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
  };

  const handleAddCallLogs = () => {
    refRBSheet.current?.open();
  
  };

  return (
    <View style={styles.dynamicScreenContainer}>
      {callTimer ? svgIcon.TimerIcon : svgIcon.CallPhoneIcon}
      <Text style={styles.dynamicScreenText}>
        {callTimer ? 'Time' : 'Phone Number'}
      </Text>
      {callTimer && (
        <Text style={styles.dynamicScreenInput}>
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)} Hrs
        </Text>
      )}
      {!callTimer && (
        <TextInput
          onChangeText={setPhoneNumber}
          style={styles.dynamicScreenInput}
          placeholder="Add Phone Number"
          keyboardType="number-pad"
        />
      )}
      <TouchableOpacity
        style={styles.dynamicScreenButton}
        onPress={callTimer ? handleAddCallLogs : startCall}>
        {svgIcon.WhitePhoneIcon}
        <Text style={styles.dynamicScreenButtonText}>Call</Text>
      </TouchableOpacity>

      <AppBottomSheet
        refRBSheet={refRBSheet}
        bottomSheetHeight={310}
        type="callLogs"
        bottomSheetHeader="Add Your Call Log"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dynamicScreenText: {
    marginVertical: WP('4'),
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.InterMedium,
  },
  dynamicScreenPhoneNumber: {
    fontSize: GLFontSize.FONT_SIZE_28,
    fontFamily: GLFontsFamily.InterBold,
  },
  dynamicScreenInput: {
    maxWidth: '80%',
    fontSize: GLFontSize.FONT_SIZE_26,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  dynamicScreenButton: {
    height: WP('13'),
    bottom: WP('5'),
    width: WP('45%'),
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: GLColors.Primary.PinkishRed,
  },
  dynamicScreenButtonText: {
    color: GLColors.Natural.White,
    marginLeft: WP('2'),
    textAlign: 'center',
    fontSize: GLFontSize.FONT_SIZE_18,
    fontFamily: GLFontsFamily.InterMedium,
  },
  dynamicScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DynamicScreen;

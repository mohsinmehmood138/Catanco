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
import { svgIcon } from '../../../assets/svg';
import { useRoute} from '@react-navigation/native';
import AppBottomSheet from '../../primitive/BottomSheet';



const formatTime = (value:any) => String(value).padStart(2, '0');

const DynamicScreen = ({
  
}) => {
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [callTimer, setCallTimer] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const refRBSheet = useRef();

  const route = useRoute();
  const {item} = route.params || {};
  console.log('Received Item:', item);

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
    console.log('total time of call', hours, minutes, seconds);
    refRBSheet.current.open();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <>
        {callTimer ?svgIcon.TimerIcon : svgIcon.CallPhoneIcon}
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
          {
            svgIcon.WhitePhoneIcon
          }
          <Text style={styles.dynamicScreenButtonText}>Call</Text>
        </TouchableOpacity>
      </>

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
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_14,
    marginVertical: 20,
  },
  dynamicScreenPhoneNumber: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_28,
  },
  dynamicScreenInput: {
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_26,
    maxWidth: '80%',
   },
  dynamicScreenButton: {
    width: WP('45%'),
    height: 44,
    backgroundColor: GLColors.Red.R6,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dynamicScreenButtonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_18,
    marginLeft: 10,
  },
});
export default DynamicScreen;

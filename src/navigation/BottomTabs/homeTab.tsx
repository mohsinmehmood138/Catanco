import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import TobBarStack from '../Stacks/TobBarStack';
import AppHeader from '../../components/complex/AppHeader';
import AppBottomSheet from '../../components/primitive/BottomSheet';

const HomeTab = () => {
  const bottomSheetRef = useRef<any>();
  const [breakText, setBreakText] = useState('Take a Break');

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const startBreak = () => {
    setBreakText('Resume');
  };

  const stopBreak = () => {
    setBreakText('Take a Break');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}>
      <AppHeader type="homeHeader" openBottomSheet={openBottomSheet} />
      <View style={styles.tobBarContainer}>
        <TobBarStack />
      </View>
      <AppBottomSheet
        type="break"
        appBottonText={breakText}
        bottomSheetHeader="Break"
        refRBSheet={bottomSheetRef}
        bottomSheetHeight={130}
        onPress={breakText == 'Take a Break' ? startBreak : stopBreak}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tobBarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default HomeTab;

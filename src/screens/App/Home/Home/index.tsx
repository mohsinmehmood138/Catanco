import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../../components/complex/AppHeader';
import HomeTopTabs from '../../../../navigation/Tabs/HomeTopTabs';
import AppBottomSheet from '../../../../components/primitive/BottomSheet';

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
    <SafeAreaView style={styles.homeTabContainer}>
      <AppHeader type="homeHeader" openBottomSheet={openBottomSheet} />
      <View style={styles.tobBarContainer}>
        <HomeTopTabs />
      </View>
      <AppBottomSheet
        type="break"
        appBottonText={breakText}
        bottomSheetHeader="Break"
        refRBSheet={bottomSheetRef}
        bottomSheetHeight={130}
        onPress={breakText == 'Take a Break' ? startBreak : stopBreak}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeTabContainer: {
    flex: 1,
  },
  tobBarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default HomeTab;

import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../components/complex/AppHeader';
import {GLFontsFamily, GLFontSize} from '../../../shared/exporter';
import TodayVisitor from '../../../components/complex/TodayVisitor';
import AppBottomSheet from '../../../components/primitive/BottomSheet';

const HistoryTab = () => {
  const refRBSheet = useRef<any>();

  const onHistoryPress = () => {
    refRBSheet.current.open();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader
        title="History"
        showHistoryIcon={true}
        onHistoryPress={onHistoryPress}
      />
      <View style={{padding: 10}}>
        <TodayVisitor topHeading="Monday" />
      </View>
      <AppBottomSheet
        type="filter"
        bottomSheetHeight={450}
        refRBSheet={refRBSheet}
        bottomSheetHeader="Filter"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dayText: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_18,
  },
});

export default HistoryTab;

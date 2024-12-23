import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../../../components/complex/AppHeader';
import TodayVisitor from '../../../components/complex/TodayVisitor';
import AppBottomSheet from '../../../components/primitive/BottomSheet';

const HistoryTab = () => {
  const refRBSheet = useRef<any>();

  const onHistoryPress = () => {
    refRBSheet.current.open();
  };

  return (
    <SafeAreaView style={styles.historyContainer}>
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
  historyContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HistoryTab;

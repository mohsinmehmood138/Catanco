import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import {svgIcon} from '../../../assets/svg';
import AppHeader from '../../../components/complex/AppHeader';
import AppBottomSheet from '../../../components/primitive/BottomSheet';
import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  WP,
} from '../../../shared/exporter';

const Tracking_Place_Time = [
  {visit: 'Visit 1', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 2', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 3', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 4', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 5', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
];

const customWhiteColor = GLColors.Natural.White;
const customPinkishColor = GLColors.Primary.PinkishRed;

const customStyles = {
  stepStrokeWidth: 5,
  stepIndicatorSize: 20,
  currentStepStrokeWidth: 5,
  currentStepIndicatorSize: 20,
  stepIndicatorLabelFontSize: 0,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorUnFinishedColor: '#aaaaaa',
  stepStrokeCurrentColor: customPinkishColor,
  separatorFinishedColor: customPinkishColor,
  stepStrokeFinishedColor: customPinkishColor,
  stepIndicatorCurrentColor: customWhiteColor,
  stepIndicatorFinishedColor: customWhiteColor,
  stepIndicatorUnFinishedColor: customWhiteColor,
  separator: () => <DashedSeparator />,
};

const TrackingTab = () => {
  const bottomSheetRef = useRef<any>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  return (
    <SafeAreaView>
      <AppHeader
        title="Tracking"
        showHistoryIcon={true}
        showDownloadIcon={true}
        onHistoryPress={openBottomSheet}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.trackingScrollView}>
        <Text style={styles.trackingHeading}>Monday</Text>
        <View style={styles.trackingParentContainer}>
          <View style={styles.trackingContainer}>
            <View style={styles.stepperContainer}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={4}
                direction="vertical"
                renderStepIndicator={() => null}
              />
            </View>

            <View style={styles.detailsContainer}>
              {Tracking_Place_Time.map((item, index) => (
                <View key={index} style={styles.stepItem}>
                  <View>
                    <Text style={styles.visitText}>{item.visit}</Text>
                    <Text style={styles.locationText}>{item.place}</Text>
                  </View>
                  <View>
                    <Text style={styles.timeText}>{item.time}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.milesAndTime}>
            <View style={styles.milesContainer}>
              <View style={styles.iconContainer}>{svgIcon.LocationIcon1}</View>
              <View>
                <Text style={styles.milesHeadingText}>344 miles</Text>
                <Text style={{fontFamily: GLFontsFamily.InterLight}}>
                  Mileage
                </Text>
              </View>
            </View>
            <View style={styles.milesContainer}>
              <View style={styles.iconContainer}>{svgIcon.ClockIcon2}</View>
              <View>
                <Text style={styles.milesHeadingText}>2 Hr 30 min</Text>
                <Text style={{fontFamily: GLFontsFamily.InterLight}}>Time</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <AppBottomSheet
        bottomSheetHeight={WP('100')}
        refRBSheet={bottomSheetRef}
        type="Filter"
        bottomSheetHeader="Filter"
      />
    </SafeAreaView>
  );
};

const DashedSeparator = () => {
  return (
    <View style={styles.separatorView}>
      <View style={styles.dashedLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  trackingHeading: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_18,
  },
  milesHeadingText: {
    fontFamily: GLFontsFamily.InterBold,
  },
  milesAndTime: {
    width: '100%',
    backgroundColor: GLColors.Natural.White,
    height: WP('14'),
    borderRadius: 12,
    marginTop: WP('2'),
    paddingHorizontal: WP('2'),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  milesContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },

  iconContainer: {
    width: WP('8'),
    height: WP('8'),
    borderRadius: 100,
    backgroundColor: GLColors.Primary.DarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: WP('2'),
  },
  trackingParentContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: WP('2'),
    marginTop: WP('5'),
  },
  separatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  dashedLine: {
    flex: 1,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#aaaaaa',
  },
  trackingContainer: {
    flexDirection: 'row',
  },
  stepperContainer: {
    justifyContent: 'center',
  },
  detailsContainer: {
    width: '90%',
    marginLeft: WP('2'),
  },
  stepItem: {
    padding: WP('2'),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  visitText: {
    fontSize: GLFontSize.FONT_SIZE_16,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: GLFontSize.FONT_SIZE_14,
  },
  timeText: {
    fontSize: GLFontSize.FONT_SIZE_14,
  },
  trackingScrollView: {
    padding: WP('5'),
  },
});

export default TrackingTab;

import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {ClockIcon, LocationIcon} from '../../assets/svg';
import AppHeader from '../../components/complex/AppHeader';
import AppBottomSheet from '../../components/primitive/BottomSheet';
import {GLColors, GLFontsFamily, GLFontSize} from '../../shared/exporter';

const Tracking_Place_Time = [
  {visit: 'Visit 1', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 2', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 3', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 4', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
  {visit: 'Visit 5', time: '1 hr 30 mins', place: 'Great Falls, Maryland'},
];

const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 20,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: GLColors.Red.R6,
  stepStrokeWidth: 5,
  stepStrokeFinishedColor: GLColors.Red.R6,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: GLColors.Red.R6,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'white',
  stepIndicatorUnFinishedColor: 'white',
  stepIndicatorCurrentColor: 'white',
  stepIndicatorLabelFontSize: 0,
  separator: () => <DashedSeparator />,
};

const TrackingTab = () => {
  const bottomSheetRef = useRef<any>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  return (
    <View style={{flex: 1}}>
      <AppHeader
        title="Tracking"
        showHistoryIcon={true}
        showDownloadIcon={true}
        onHistoryPress={openBottomSheet}
      />
      <View style={{padding: 20}}>
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
              <View style={styles.iconContainer}>
                <LocationIcon color="white" height={18} width={18} />
              </View>
              <View>
                <Text style={styles.milesHeadingText}>344 miles</Text>
                <Text style={{fontFamily: GLFontsFamily.InterLight}}>
                  Mileage
                </Text>
              </View>
            </View>
            <View style={styles.milesContainer}>
              <View style={styles.iconContainer}>
                <ClockIcon color="white" height={18} width={18} />
              </View>
              <View>
                <Text style={styles.milesHeadingText}>2 Hr 30 min</Text>
                <Text style={{fontFamily: GLFontsFamily.InterLight}}>Time</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <AppBottomSheet
        bottomSheetHeight={450}
        refRBSheet={bottomSheetRef}
        type="Filter"
        bottomSheetHeader="Filter"
      />
    </View>
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
    backgroundColor: 'white',
    height: 56,
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  milesContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
  timeContainer: {},
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: GLColors.Blue.B2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  trackingParentContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 10,
    marginTop: 20,
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
    marginLeft: 10,
  },
  stepItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  visitText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 14,
  },
});

export default TrackingTab;

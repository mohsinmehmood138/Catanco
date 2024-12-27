import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
  TRACKING_PLACE_TIME,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';
import AppHeader from '../../../components/complex/AppHeader';
import AppBottomSheet from '../../../components/primitive/BottomSheet';

const WhiteColor = GLColors.Natural.White;
const GreyColor = GLColors.Natural.LightGrey;
const PinkishRed = GLColors.Primary.PinkishRed;

const customStyles = {
  stepStrokeWidth: WP('1'),
  stepIndicatorSize: WP('5'),
  stepIndicatorLabelFontSize: 0,
  currentStepStrokeWidth: WP('1'),
  currentStepIndicatorSize: WP('5'),
  separatorFinishedColor: PinkishRed,
  stepStrokeCurrentColor: PinkishRed,
  stepStrokeFinishedColor: PinkishRed,
  separatorUnFinishedColor: GreyColor,
  stepStrokeUnFinishedColor: GreyColor,
  stepIndicatorCurrentColor: WhiteColor,
  stepIndicatorFinishedColor: WhiteColor,
  stepIndicatorUnFinishedColor: WhiteColor,
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
        style={styles.trackingSafeArea}>
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
              {TRACKING_PLACE_TIME.map((item, index) => (
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
        bottomSheetHeight={WP('250')}
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
  trackingSafeArea: {
    padding: WP('5'),
  },
  milesHeadingText: {
    fontFamily: GLFontsFamily.InterBold,
  },
  milesAndTime: {
    justifyContent: 'space-between',
    backgroundColor: WhiteColor,
    paddingHorizontal: WP('2'),
    borderRadius: WP('2'),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: WP('2'),
    height: WP('15'),
    width: '100%',
  },
  milesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
  },

  iconContainer: {
    backgroundColor: GLColors.Blue.B2,
    justifyContent: 'center',
    marginRight: WP('2'),
    alignItems: 'center',
    borderRadius: 100,
    height: WP('10'),
    width: WP('10'),
  },
  trackingParentContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: WP('2'),
    marginTop: WP('5'),
    padding: WP('2'),
  },
  separatorView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  dashedLine: {
    flex: 1,
    height: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: GreyColor,
  },
  trackingContainer: {
    flexDirection: 'row',
  },
  stepperContainer: {
    justifyContent: 'center',
  },
  detailsContainer: {
    marginLeft: WP('2'),
    width: '90%',
  },
  stepItem: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: WP('2'),
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
});

export default TrackingTab;

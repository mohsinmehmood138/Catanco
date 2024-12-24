import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AppInput from '../AppInput';
import AppButton from '../AppButton';
import {svgIcon} from '../../../assets/svg';
import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  CALL_LOGS,
  BREAK,
  WP,
} from '../../../shared/exporter';

interface BottomSheetProps {
  type?: String;
  refRBSheet: any;
  appBottomText?: string;
  bottomSheetHeight: any;
  bottomSheetHeader: string;
  onPress?: () => void | any;
}

const AppBottomSheet: React.FC<BottomSheetProps> = ({
  type,
  refRBSheet,
  appBottomText,
  bottomSheetHeader,
  bottomSheetHeight,
  onPress,
}) => {
  const renderContent = () => {
    switch (type) {
      case CALL_LOGS:
        return (
          <>
            <AppInput label="Person Name" placeholder="Enter Person Name" />
            <AppInput
              label="Date"
              placeholder="Enter Date"
              isDatePicker={true}
            />
          </>
        );
      case BREAK:
        return (
          <>
            <View style={styles.bottomSheetButton}>
              <AppButton
                onPress={onPress}
                color={
                  appBottomText == 'Take a Break'
                    ? GLColors.Primary.PinkishRed
                    : GLColors.Natural.LightGreen
                }
                label={appBottomText}
                width="100%"
              />
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <RBSheet
      ref={refRBSheet}
      openDuration={250}
      useNativeDriver={false}
      height={bottomSheetHeight}
      customStyles={{
        container: {
          borderTopLeftRadius: WP('4'),
          borderTopRightRadius: WP('4'),
          backgroundColor: GLColors.Natural.White,
          position: 'relative',
          justifyContent: 'space-between',
        },
        draggableIcon: {
          backgroundColor: GLColors.Natural.Black,
        },
      }}>
      <View style={styles.header}>
        <Text style={styles.bottomSheetHeading}>{bottomSheetHeader}</Text>
        <TouchableOpacity
          onPress={() => refRBSheet.current.close()}
          style={styles.cancelButton}>
          {svgIcon.CancelIcon}
        </TouchableOpacity>
      </View>

      {renderContent()}
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: WP('5'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSheetHeading: {
    fontSize: GLFontSize.FONT_SIZE_18,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  cancelButton: {
    position: 'absolute',
    right: WP('4'),
  },
  bottomSheetButton: {
    position: 'absolute',
    bottom: WP('-2'),
    left: WP('4'),
    right: WP('4'),
  },
});

export default AppBottomSheet;

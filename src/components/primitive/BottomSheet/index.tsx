import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppInput from '../AppInput';
import AppButton from '../AppButton';
import {svgIcon} from '../../../assets/svg';
import {GLColors, GLFontsFamily, GLFontSize} from '../../../shared/exporter';
import RBSheet from 'react-native-raw-bottom-sheet';

interface BottomSheetProps {
  type?: String;
  refRBSheet: any;
  appBottonText?: string;
  bottomSheetHeight: any;
  bottomSheetHeader: string;
  onPress?: () => void | any;
}

const AppBottomSheet: React.FC<BottomSheetProps> = ({
  refRBSheet,
  bottomSheetHeight,
  type,
  bottomSheetHeader,
  appBottonText,
  onPress,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'callLogs':
        return (
          <>
            <AppInput label="Person Name" placeholder="Enter Person Name" />
            <AppInput
              label="Date"
              placeholder="Enter Date"
              isDatePicker={true}
            />
            <View style={{paddingHorizontal: 20}}>
              <AppButton
                onPress={() => ''}
                color={GLColors.Red.R6}
                label="Add"
                width="100%"
              />
            </View>
          </>
        );
      case 'break':
        return (
          <>
            <View style={{paddingHorizontal: 20}}>
              <AppButton
                onPress={onPress}
                color={
                  appBottonText == 'Take a Break' ? GLColors.Red.R6 : '#70C1B3'
                }
                label={appBottonText}
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
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
        },
        draggableIcon: {
          backgroundColor: '#000',
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
    padding: 20,
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
    right: 20,
  },
});

export default AppBottomSheet;

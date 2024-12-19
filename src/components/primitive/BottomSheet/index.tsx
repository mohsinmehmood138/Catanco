import React from 'react';
import AppInput from '../AppInput';
import AppButton from '../AppButton';
import {CancelIcon} from '../../../assets/svg';
import RBSheet from 'react-native-raw-bottom-sheet';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {GLColors, GLFontsFamily, GLFontSize} from '../../../shared/exporter';

interface BottomSheetProps {
  type?: String;
  refRBSheet: any;
  bottomSheetHeight: any;
  bottomSheetHeader: string;
  appBottonText?: string;
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
                onPress={()=>Alert.alert('input Data')}
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
      height={bottomSheetHeight}
      openDuration={250}
      useNativeDriver={false}
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
          <CancelIcon />
        </TouchableOpacity>
      </View>

      {renderContent()}
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  bottomSheetHeading: {
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_18,
  },
  cancelButton: {
    position: 'absolute',
    right: 20,
  },
});

export default AppBottomSheet;

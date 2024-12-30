import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {CardField} from '@stripe/stripe-react-native';
import AppInput from '../AppInput';
import AppButton from '../AppButton';
import {svgIcon} from '../../../assets/svg';
import {usePaymentSheet} from '../../../hooks/usePaymentStripe';
import {
  WP,
  BREAK,
  GLColors,
  CALL_LOGS,
  GLFontSize,
  GLFontsFamily,
  APP_PAYMENT,
} from '../../../shared/exporter';

interface BottomSheetProps {
  type?: String;
  refRBSheet: any;
  appBottomText?: string;
  bottomSheetHeight: any;
  bottomSheetHeader: string;
  onPress?: () => void | any;
  onCardChange?: (cardDetails: any) => void;
  cardComplete?: boolean;
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
    const {handleCardChange} = usePaymentSheet();
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

      case APP_PAYMENT:
        return (
          <View style={styles.paymentContainer}>
            <CardField
              postalCodeEnabled={false}
              cardStyle={{
                textColor: GLColors.Natural.Black,
                borderWidth: 1,
                borderColor: GLColors.Primary.Pale,
                borderRadius: 8,
                fontSize: GLFontSize.FONT_SIZE_16,
              }}
              autofocus
              placeholders={{
                number: '4242 4242 4242 4242',
                postalCode: '12345',
                cvc: 'CVC',
                expiration: 'MM|YY',
              }}
              style={styles.cardField}
              onCardChange={handleCardChange}
            />

            <View style={styles.paymentButton}>
              <AppButton
                color={GLColors.Primary.PinkishRed}
                onPress={onPress}
                width="90%"
                label={appBottomText}
              />
            </View>
          </View>
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
    paddingBottom: 0,
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
  paymentContainer: {
    paddingTop: 3,
    padding: WP('4'),
    height: WP('40'),
    justifyContent: 'space-between',
  },
  cardField: {
    width: '100%',
    height: WP('15'),
    marginTop: WP('4'),
  },

  disabledButton: {
    opacity: 0.7,
  },
  paymentButton: {
    position: 'relative',
    top: WP('9'),
  },
});

export default AppBottomSheet;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import {
  WP,
  appIcons,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';

interface ModalProps {
  isAppModal: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  position?: 'center' | 'top';
}

const AppModal: React.FC<ModalProps> = ({
  onCancel,
  onConfirm,
  isAppModal,
  position = 'top',
}) => {
  return (
    <Modal
      style={[
        position === 'top'
          ? styles.modalTopPosition
          : styles.modalCenterPosition,
      ]}
      isVisible={isAppModal}>
      <View style={styles.modalContent}>
        <View style={styles.modalIconContainer}>
          <Image source={appIcons.checkBoxImages} />
        </View>
        <Text style={styles.detailText}>
          Do you want to Complete the visit?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={[styles.buttonText, styles.cancelModalText]}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.okButton} onPress={onConfirm}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCenterPosition: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTopPosition: {
    marginTop: WP('5'),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalContent: {
    padding: WP('5'),
    width: WP('80'),
    elevation: WP('1'),
    borderRadius: 15,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: GLColors.Natural.DarkGrey,
    backgroundColor: GLColors.Natural.White,
  },
  icon: {
    marginBottom: WP('3'),
  },
  detailText: {
    width: '90%',
    textAlign: 'center',
    marginBottom: WP('4'),
    color: GLColors.Natural.DarkGrey,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterMedium,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    padding: WP('2'),
    borderRadius: 40,
    alignItems: 'center',
    borderColor: GLColors.Natural.Black,
  },
  okButton: {
    flex: 1,
    padding: WP('2'),
    marginLeft: WP('2'),
    alignItems: 'center',
    borderRadius:20,
    backgroundColor: GLColors.Primary.PinkishRed,

  },
  buttonText: {
    fontSize: GLFontSize.FONT_SIZE_16,
    color: GLColors.Natural.White,
    fontWeight: 'bold',
  },
  modalIconContainer: {
    width: WP('17'),
    height: WP('17'),
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: WP('4'),
    justifyContent: 'center',
    backgroundColor: GLColors.Primary.DarkBlue,
  },
  cancelModalText: {
    color: GLColors.Natural.Black,
  },
});

export default AppModal;

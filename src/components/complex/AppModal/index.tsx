import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  GLColors,
  appIcons,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import Modal from 'react-native-modal';

interface ModalProps {
  isAppModal: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  position?: 'center' | 'top';
}

const AppModal: React.FC<ModalProps> = ({
  isAppModal,
  onCancel,
  onConfirm,
  position = 'top',
}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        style={[
          styles.appModal,
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
              <Text style={[styles.buttonText, styles.cancelModalText]}>
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okButton} onPress={onConfirm}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  appModal: {
    margin: 0,
  },
  modalCenterPosition: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTopPosition: {
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalContent: {
    height: 234,
    padding: 20,
    width: '90%',
    elevation: 5,
    borderRadius: 15,
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
  },
  icon: {
    marginBottom: 15,
  },
  detailText: {
    width: '80%',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
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
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    alignItems: 'center',
  },
  okButton: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: GLColors.Red.R6,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  modalIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#247BA0',
  },
  cancelModalText: {
    color: 'black',
  },
});

export default AppModal;

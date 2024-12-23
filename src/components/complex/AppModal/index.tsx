import React from 'react';
import Modal from 'react-native-modal';
import {appIcons} from '../../../shared/exporter';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {GLColors, GLFontsFamily, GLFontSize} from '../../../shared/exporter';

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
            <TouchableOpacity style={[styles.cancelButton]} onPress={onCancel}>
              <Text style={[styles.buttonText, {color: 'black'}]}>No</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTopPosition: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '20%',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 234,
  },
  icon: {
    marginBottom: 15,
  },
  detailText: {
    fontSize: GLFontSize.FONT_SIZE_16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: GLFontsFamily.InterMedium,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  okButton: {
    flex: 1,
    backgroundColor: GLColors.Red.R6,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#247BA0',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppModal;

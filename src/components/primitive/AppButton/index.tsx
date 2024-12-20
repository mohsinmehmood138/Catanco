import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface AppButtonpRrops {
  color: string;
  label: string | any;
  width: string | number;

  onPress: () => any | any;
}

const AppButton: React.FC<AppButtonpRrops> = ({
  color,
  label,
  width,
  onPress,
}) => {

 return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, {backgroundColor: color, width: width}]}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    zIndex: 1,
    height: 70,
    backgroundColor: 'white',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AppButton;

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, GestureResponderEvent } from 'react-native';

interface AppButtonProps {
  color: string;
  label: string;
  width: number | string;
  onPress: (event: GestureResponderEvent) => void;

}

const AppButton: React.FC<AppButtonProps> = ({ color, label, width, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: color, width }]}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 70,
  },
  button: {
    position: 'absolute',
    height: 44,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: Platform.OS === 'ios' ? 30 : 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AppButton;

import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {GLColors, GLFontSize, WP} from '../../../shared/exporter';

interface AppButtonProps {
  color: string;
  label: string;
  width: number | 'auto';
  onPress: (event: GestureResponderEvent) => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  color,
  label,
  width,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, {backgroundColor: color, width}]}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GLColors.Natural.White,
  },
  button: {
    height: WP('12'),
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    bottom: Platform.OS === 'ios' ? WP('9') : WP('6'),
  },
  buttonText: {
    color: GLColors.Natural.White,
    fontSize: GLFontSize.FONT_SIZE_16,
  },
});

export default AppButton;

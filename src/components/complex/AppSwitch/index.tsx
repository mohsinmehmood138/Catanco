import React from 'react';
import {GLColors} from '../../../shared/exporter';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

interface CustomSwitchProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const AppCustomSwitch: React.FC<CustomSwitchProps> = ({
  isEnabled,
  onToggle,
}) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={0.8}
      style={styles.switchContainer}>
      <View style={[styles.track, isEnabled && styles.trackEnabled]}>
        <View
          style={[
            styles.thumb,
            isEnabled ? styles.thumbEnabled : styles.thumbDisabled,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 42,
    height: 26,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  track: {
    height: 22,
    width: '100%',
    borderRadius: 15,
    position: 'relative',
    backgroundColor: '#D7D7FF',
  },

  trackEnabled: {
    backgroundColor: GLColors.Red.R6,
  },
  thumb: {
    top: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#fff',
  },
  thumbEnabled: {
    left: 22,
  },
  thumbDisabled: {
    left: 1.4,
  },
});

export default AppCustomSwitch;

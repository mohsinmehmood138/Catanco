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
      <View
        style={[
          styles.track,
           styles.trackEnabled 
        ]}>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  track: {
    width: '100%',
    height: 22,
    borderRadius: 15,
    backgroundColor: '#D7D7FF',
    position: 'relative',
  },
  trackEnabled: {
    backgroundColor: GLColors.Red.R6,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 1,
  },
  thumbEnabled: {
    left: 22,
  },
  thumbDisabled: {
    left: 1.4,
  },
});

export default AppCustomSwitch;

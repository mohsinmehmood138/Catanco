import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {GLColors, WP} from '../../../shared/exporter';

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
    width: WP('11'),
    marginLeft: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  track: {
    height: WP('6'),
    width: '100%',
    borderRadius: 15,
    position: 'relative',
    backgroundColor: GLColors.Primary.Pale,
  },

  trackEnabled: {
    backgroundColor: GLColors.Primary.PinkishRed,
  },
  thumb: {
    top: 2,
    width: WP('5'),
    height: WP('5'),
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: GLColors.Natural.White,
  },
  thumbEnabled: {
    left: WP('5.5'),
  },
  thumbDisabled: {
    left: 1.3,
  },
});

export default AppCustomSwitch;

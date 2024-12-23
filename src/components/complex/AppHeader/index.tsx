import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  WP,
} from '../../../shared/exporter';
import AppCustomSwitch from '../AppSwitch';
import {svgIcon} from '../../../assets/svg';
import {useSharedState} from '../../../hooks';

interface AppHeaderProps {
  title?: string;
  type?: string;
  showBackIcon?: boolean;
  showHistoryIcon?: boolean;
  showDownloadIcon?: boolean;
  onHistoryPress?: () => void;
  openBottomSheet?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  type,
  showBackIcon,
  showHistoryIcon,
  showDownloadIcon,
  onHistoryPress,
  openBottomSheet,
}) => {
  const navigation = useNavigation();
  const {isEnabled, toggleSwitch} = useSharedState();
  const [appNotification] = useState(3);

  return (
    <>
      <View style={styles.headerContainer}>
        {type === 'homeHeader' ? (
          <View style={styles.homeHeaderContainer}>
            <Text style={styles.homeHeaderText}>
              {isEnabled ? 'End Your Day' : 'Start Your Day'}
            </Text>

            <AppCustomSwitch isEnabled={isEnabled} onToggle={toggleSwitch} />

            <View style={styles.timeSheet}>
              {isEnabled && (
                <TouchableOpacity
                  style={styles.clockIcon}
                  onPress={openBottomSheet}>
                  {svgIcon.ClockIcon1}
                </TouchableOpacity>
              )}

              {svgIcon.NotificationIcon1}
              <View style={styles.notificationShowContainer}>
                <Text style={styles.notificationText}>{appNotification}</Text>
              </View>
            </View>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.headerBackIcon}
              onPress={() => navigation.goBack()}>
              {showBackIcon && svgIcon.GoBackIcon}
            </TouchableOpacity>
            <View>
              <Text style={styles.headerTitle}>{title}</Text>
            </View>

            {showHistoryIcon && (
              <TouchableOpacity
                style={styles.historyView}
                onPress={onHistoryPress}>
                {svgIcon.CalendarWhiteIcon}
              </TouchableOpacity>
            )}

            {showDownloadIcon && (
              <TouchableOpacity
                style={[styles.historyView, styles.historyDownlaodIcon]}>
                {svgIcon.DownloadIcon}
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: WP('19%'),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    justifyContent: 'center',
    elevation: 1,
    position: 'relative',
  },
  headerTitle: {
    fontFamily: GLFontsFamily.InterBold,
    alignSelf: 'center',
    fontSize: GLFontSize.FONT_SIZE_18,
  },
  headerBackIcon: {
    position: 'absolute',
    left: 20,
  },
  homeHeaderContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row',
  },
  homeHeaderText: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_18,
  },
  switchContainer: {
    marginLeft: 20,
    transform: [{scale: 1.2}],
  },
  notificationShowContainer: {
    width: 20,
    height: 20,
    backgroundColor: GLColors.Red.R6,
    position: 'relative',
    right: 15,
    top: -10,
    borderRadius: 20,
  },
  historyView: {
    width: 32,
    height: 32,
    backgroundColor: GLColors.Blue.B2,
    borderRadius: 100,
    position: 'absolute',
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeSheet: {
    position: 'absolute',
    right: -10,
    flexDirection: 'row',
  },
  notificationText: {
    color: 'white',
    textAlign: 'center',
  },
  historyDownlaodIcon: {
    right: 58,
    backgroundColor: GLColors.Red.R6,
  },
  clockIcon: {
    marginRight: 20,
  },
});

export default AppHeader;

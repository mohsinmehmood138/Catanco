import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  WP,
  GLColors,
  GLFontSize,
  HOME_HEADER,
  GLFontsFamily,
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
  type,
  title,
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
    <View style={styles.headerContainer}>
      {type === HOME_HEADER ? (
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

          <Text style={styles.headerTitle}>{title}</Text>

          {showHistoryIcon && (
            <TouchableOpacity
              style={styles.historyView}
              onPress={onHistoryPress}>
              {svgIcon.CalendarWhiteIcon}
            </TouchableOpacity>
          )}

          {showDownloadIcon && (
            <TouchableOpacity
              style={[styles.historyView, styles.historyDownloadIcon]}>
              {svgIcon.DownloadIcon}
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: WP('19'),
    backgroundColor: GLColors.Natural.White,
    shadowColor: GLColors.Natural.Black,
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
    left: WP('5'),
  },
  homeHeaderContainer: {
    marginHorizontal: WP('5'),
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
    marginLeft: WP('5'),
    transform: [{scale: 1.2}],
  },
  notificationShowContainer: {
    width: WP('5'),
    height: WP('5'),
    backgroundColor: GLColors.Primary.PinkishRed,
    position: 'relative',
    right: WP('3'),
    top: WP('-3'),
    borderRadius: 20,
  },
  historyView: {
    width: WP('8'),
    height: WP('8'),
    backgroundColor: GLColors.Primary.DarkBlue,
    borderRadius: 100,
    position: 'absolute',
    right: WP('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeSheet: {
    position: 'absolute',
    right: WP('-2'),
    flexDirection: 'row',
  },
  notificationText: {
    color: GLColors.Natural.White,
    textAlign: 'center',
  },
  historyDownloadIcon: {
    right: WP('15'),
    backgroundColor: GLColors.Primary.PinkishRed,
  },
  clockIcon: {
    marginRight: WP('5'),
  },
});

export default AppHeader;

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
  const {isEnabled, toggleSwitch}: any = useSharedState();
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
    elevation: 1,
    width: '100%',
    shadowRadius: 1,
    height: WP('19'),
    shadowOpacity: 0.1,
    position: 'relative',
    justifyContent: 'center',
    shadowColor: GLColors.Natural.Black,
    shadowOffset: {width: 0, height: 2},
    backgroundColor: GLColors.Natural.White,
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: GLFontSize.FONT_SIZE_18,
    fontFamily: GLFontsFamily.InterBold,
  },
  headerBackIcon: {
    position: 'absolute',
    left: WP('5'),
  },
  homeHeaderContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: WP('5'),
    justifyContent: 'flex-start',
  },
  homeHeaderText: {
    fontSize: GLFontSize.FONT_SIZE_18,
    fontFamily: GLFontsFamily.InterBold,
  },
  switchContainer: {
    marginLeft: WP('5'),
    transform: [{scale: 1.2}],
  },
  notificationShowContainer: {
    backgroundColor: GLColors.Primary.PinkishRed,
    position: 'relative',
    borderRadius: 20,
    height: WP('5'),
    width: WP('5'),
    right: WP('3'),
    top: WP('-3'),
  },
  historyView: {
    backgroundColor: GLColors.Primary.DarkBlue,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 100,
    height: WP('8'),
    width: WP('8'),
    right: WP('5'),
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

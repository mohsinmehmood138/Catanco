import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppHeader from '../../../../../components/complex/AppHeader';
import AppCustomSwitch from '../../../../../components/complex/AppSwitch';
import {
  GLColors,
  GLFontsFamily,
  GLFontSize,
  WP,
} from '../../../../../shared/exporter';

const Notification = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <AppHeader title="Notifications" showBackIcon={true} />
      <View style={styles.notificationContainer}>
        <View style={styles.notificationList}>
          <View style={styles.systemNotification}>
            <View style={styles.iconDiv}></View>
            <Text style={styles.notificationText}>System Notification</Text>
          </View>

          <AppCustomSwitch isEnabled={''} onToggle={() => ''} />
        </View>

        <View style={styles.divider} />
        <View style={styles.notificationList}>
          <View style={styles.systemNotification}>
            <View style={styles.iconDiv}></View>
            <Text style={styles.notificationText}>Other Notifications</Text>
          </View>

          <AppCustomSwitch isEnabled={''} onToggle={() => ''} />
        </View>
      </View>

      <View style={styles.disablingNotification}>
        <View style={styles.disablingNotificationIcon}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('AllNotificationScreen')}>
          <Text style={styles.disableNotificationText}>
            Disabling notifications will prevent you from receiving updates on
            product price changes.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    width: '90%',
    height: WP('38'),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: WP('5'),
    borderColor: GLColors.Natural.DarkGrey,
    borderWidth: 1,
    alignItems: 'center',
  },
  notificationList: {
    flexDirection: 'row',
    width: '95%',
    height: WP('14'),
    paddingHorizontal: WP('2'),
    marginVertical: WP('2'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconDiv: {
    backgroundColor: GLColors.Primary.PinkishRed,
    width: WP('10'),
    height: WP('10'),
    borderRadius: WP('2'),
    marginRight: WP('2'),
  },
  notificationText: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_16,
  },
  divider: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GLColors.Natural.DarkGrey,
  },
  disablingNotification: {
    width: '90%',
    height: WP('17'),
    alignSelf: 'center',
    backgroundColor: '#D7D7FF',
    marginTop: WP('5'),
    borderRadius: WP('5'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    flexDirection: 'row',
  },
  disablingNotificationIcon: {
    backgroundColor: GLColors.Primary.PinkishRed,
    borderRadius: 50,
    width: WP('9'),
    height: WP('9'),
    marginRight: 9,
  },
  disableNotificationText: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_12,
    lineHeight: WP('5'),
  },
  systemNotification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Notification;

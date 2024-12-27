import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../../../shared/exporter';
import { svgIcon } from '../../../../../assets/svg';
import AppHeader from '../../../../../components/complex/AppHeader';
import AppCustomSwitch from '../../../../../components/complex/AppSwitch';

const Notification = () => {
  const navigation = useNavigation();
  const [otherNotification, setOtherNotification] = useState(false);
  const [systemNotification, setsystemNotification] = useState(false);

  const toggleSystemSwitch = () =>
    setsystemNotification(previousState => !previousState);
  const toggleOtherNotification = () =>
    setOtherNotification(previousState => !previousState);

  return (
    <SafeAreaView>
      <AppHeader title="Notifications" showBackIcon={true} />
      <View style={styles.notificationContainer}>
        <View style={styles.notificationList}>
          <View style={styles.systemNotification}>
            <View style={styles.iconDiv}>{svgIcon.MobileIcon}</View>
            <Text style={styles.notificationText}>System Notification</Text>
          </View>

          <AppCustomSwitch
            isEnabled={systemNotification}
            onToggle={toggleSystemSwitch}
          />
        </View>

        <View style={styles.divider} />
        <View style={styles.notificationList}>
          <View style={styles.systemNotification}>
            <View style={styles.iconDiv}>{svgIcon.TwoPersonIcon}</View>
            <Text style={styles.notificationText}>Other Notifications</Text>
          </View>
          <AppCustomSwitch
            isEnabled={otherNotification}
            onToggle={toggleOtherNotification}
          />
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
    borderWidth: 1,
    borderRadius: 20,
    height: WP('38'),
    marginTop: WP('5'),
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: GLColors.Natural.DarkGrey,
  },
  notificationList: {
    width: '95%',
    height: WP('14'),
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: WP('2'),
    paddingHorizontal: WP('2'),
    justifyContent: 'space-between',
  },
  iconDiv: {
    width: WP('10'),
    height: WP('10'),
    alignItems:"center",
    marginRight: WP('2'),
    borderRadius: WP('2'),
    justifyContent:"center",
    backgroundColor: GLColors.Primary.PinkishRed,
  },
  notificationText: {
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterBold,
  },
  divider: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GLColors.Natural.DarkGrey,
  },
  disablingNotification: {
    backgroundColor: GLColors.Primary.Pale,
    width: '90%',
    height: WP('17'),
    marginTop: WP('5'),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: WP('5'),
    justifyContent: 'center',
    paddingHorizontal: WP('5'),
    
  },
  disablingNotificationIcon: {
    width: WP('9'),
    marginRight: 9,
    height: WP('9'),
    borderRadius: 50,
    backgroundColor: GLColors.Primary.PinkishRed,
  },
  disableNotificationText: {
    lineHeight: WP('5'),
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.InterMedium,
  },
  systemNotification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Notification;

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/complex/AppHeader';
import AppCustomSwitch from '../../components/complex/AppSwitch';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GLColors, GLFontsFamily, GLFontSize} from '../../shared/exporter';

const NotificationScreen = () => {
  const naviagtion=useNavigation()
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader title="Notifications" showBackIcon={true}/>
      <View style={styles.notificationContainer}>
        <View style={styles.notifcationList}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.iconDiv}></View>
            <Text style={styles.notificationText}>System Notification</Text>
          </View>

          <AppCustomSwitch isEnabled={''} onToggle={() => ''} />
        </View>

        <View style={styles.divider} />
        <View style={styles.notifcationList}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.iconDiv}></View>
            <Text style={styles.notificationText}>Other Notifications</Text>
          </View>

          <AppCustomSwitch isEnabled={''} onToggle={() => ''} />
        </View>
      </View>

      <View style={styles.disablingNotification}>
        <View style={styles.disablingNotificationIcon}></View>

        <TouchableOpacity onPress={()=>naviagtion.navigate('AllNotificationScree')}>
        <Text style={styles.disableNotificationText}>
          Disabling notifications will prevent you from receiving updates on
          product price changes.
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    width: '90%',
    height: 150,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    alignItems: 'center',
  },
  notifcationList: {
    flexDirection: 'row',
    width: '95%',
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconDiv: {
    backgroundColor: GLColors.Red.R6,
    width: 35,
    height: 35,
    borderRadius: 8,
    marginRight: 10,
  },
  notificationText: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_16,
  },
  divider: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#EFEFEF',
  },
  disablingNotification: {
    width: '90%',
    height: 71,
    alignSelf: 'center',
    backgroundColor: '#D7D7FF',
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  disablingNotificationIcon: {
    backgroundColor: GLColors.Red.R6,
    borderRadius: 50,
    width: 35,
    height: 35,
    marginRight: 9,
  },
  disableNotificationText: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_12,

    lineHeight: 20,
  },
});
export default NotificationScreen;

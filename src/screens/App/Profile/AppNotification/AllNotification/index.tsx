import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {svgIcon} from '../../../../../assets/svg';
import {GLColors, WP} from '../../../../../shared/exporter';
import AppHeader from '../../../../../components/complex/AppHeader';

const AllNotificationScree = () => {
  return (
    <SafeAreaView>
      <AppHeader title="Notifications" showBackIcon={true} />

      <View style={styles.listContainer}>
        <View>{svgIcon.ClockIcon2}</View>
        <View style={styles.textContainer}>
          <Text style={styles.notificationText}>
            Lorem ipsum dolor sit amet consectetur. At lectus diam a sit
            aliquet.
          </Text>
          <Text style={styles.notificationDistanceText}>25m</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '90%',
    borderRadius: 8,
    alignSelf: 'center',
    minHeight: WP('30'),
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: WP('3'),
    paddingVertical: WP('5'),
    paddingHorizontal: WP('5'),
    backgroundColor: GLColors.Primary.Vivid,
  },
  textContainer: {
    flex: 1,
    marginLeft: WP('4'),
  },
  notificationText: {
    flexWrap: 'wrap',
    textAlign: 'left',
    flexShrink: 1,
  },
  notificationDistanceText: {
    marginTop: WP('1'),
  },
});

export default AllNotificationScree;

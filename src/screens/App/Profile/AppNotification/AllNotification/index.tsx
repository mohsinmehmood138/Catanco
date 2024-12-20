import React from 'react';
import {ClockIcon} from '../../../../../assets/svg';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../../../../../components/complex/AppHeader';

const AllNotificationScree = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader title="Notifications" showBackIcon={true}/>
      <View style={styles.allNotificationContainer}>
        <View style={styles.listContainer}>
          <View>
            <ClockIcon width={25} height={35} color={'#247BA0'} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.notificationText}>
              Lorem ipsum dolor sit amet consectetur. At lectus diam a sit
              aliquet.
            </Text>
            <Text style={{marginTop: 5}}>25m</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  allNotificationContainer: {},
  listContainer: {
    width: '90%',
    minHeight: 76,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  notificationText: {
    flexWrap: 'wrap',
    textAlign: 'left',
    flexShrink: 1,
  },
});

export default AllNotificationScree;

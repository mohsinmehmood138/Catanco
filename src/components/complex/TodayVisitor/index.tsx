import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import AppModal from '../AppModal';
import {svgIcon} from '../../../assets/svg';
import {TODAY_VISITOR_DATA, WP} from '../../../shared/exporter';
import {GLFontsFamily, GLFontSize, GLColors} from '../../../shared/exporter';

interface VisitorProps {
  topHeading?: string;
}
const TodayVisitor: React.FC<VisitorProps> = ({topHeading}) => {
  const [isAppModal, setIsAppModal] = useState(false);

  const openAppModal = () => {
    setIsAppModal(!isAppModal);
  };

  return (
    <>
      <Text style={styles.teleHealthText}>
        {topHeading ? topHeading : 'Today’s Visits'}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={TODAY_VISITOR_DATA}
          renderItem={({item}) => (
            <View style={styles.visitContainer}>
              <View style={styles.visitHeader}>
                <Text style={styles.visitHeaderText}>
                  Visit {item.id} - {item.header}
                </Text>
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={openAppModal}>
                  <Text style={styles.visitViewText}>Visit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.visitorDateContainer}>
                <View style={styles.visitorDateAndTime}>
                  {svgIcon.CalendarIcon}
                  <Text style={styles.visitDateTime}>{item.date}</Text>
                </View>
                <View style={[styles.visitorDateAndTime, styles.clockIcon]}>
                  {svgIcon.ClockIcon}
                  <Text style={styles.visitDateTime}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.visitorLocation}>
                {svgIcon.LocationIcon}
                <Text style={styles.visitLocation}>{item.location}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      <AppModal
        isAppModal={isAppModal}
        onCancel={openAppModal}
        onConfirm={() => ''}
      />
    </>
  );
};

const styles = StyleSheet.create({
  visitorDateAndTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewButton: {
    borderRadius: 20,
    paddingVertical: WP('1.5'),
    paddingHorizontal: WP('5'),
    backgroundColor: GLColors.Natural.LightGreen,
  },

  visitContainer: {
    elevation: 1,
    height: WP('27'),
    borderRadius: 12,
    padding: WP('3'),
    marginTop: WP('4'),
    backgroundColor: GLColors.Natural.LightGrey,
  },
  visitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  visitHeaderText: {
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  visitDateTime: {
    marginLeft: WP('2'),
    alignItems: 'center',
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.InterMedium,
  },
  visitLocation: {
    marginTop: WP('1'),
    marginLeft: WP('2'),
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.InterMedium,
  },
  visitorDateContainer: {
    width: '90%',
    flexDirection: 'row',
    marginVertical: WP('1'),
  },
  teleHealthText: {
    marginTop: WP('3'),
    marginLeft: WP('2'),
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  visitorLocation: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  visitViewText: {
    color: GLColors.Primary.DarkBlue,
  },
  clockIcon: {
    marginLeft: WP('2'),
  },
});
export default TodayVisitor;

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AppModal from '../AppModal';
import {svgIcon} from '../../../assets/svg';
import {TODAY_VISITOR_DATA} from '../../../shared/exporter';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import {GLFontsFamily, GLFontSize} from '../../../shared/exporter';

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
      <Text style={styles.telehealthText}>
        {topHeading ? topHeading : 'Today’s Visits'}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
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
                  <Text style={{color: '#247BA0'}}>Visit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.visitorDateContainer}>
                <View style={styles.visitorDateAndTime}>
                  {svgIcon.CalendarIcon}
                  <Text style={styles.visitDateTime}>{item.date}</Text>
                </View>
                <View style={[styles.visitorDateAndTime, {marginLeft: 10}]}>
                  {svgIcon.ClockIcon}
                  <Text style={[styles.visitDateTime]}>{item.time}</Text>
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
  telehealthText: {
    marginTop: 14,
    marginLeft: 10,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  visitorDateAndTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewButton: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 18,
    backgroundColor: '#B2DBBF',
  },
  scrollContent: {
    paddingBottom: 230,
  },
  visitContainer: {
    height: 100,
    padding: 10,
    elevation: 1,
    marginTop: 15,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
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
    marginLeft: 5,
    alignItems: 'center',
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.InterMedium,
  },
  visitLocation: {
    marginTop: 5,
    marginLeft: 5,
    color: '#666',
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.InterMedium,
  },
  visitorDateContainer: {
    width: '90%',
    marginVertical: 5,
    flexDirection: 'row',
  },
  visitorLocation: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default TodayVisitor;

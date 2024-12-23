import AppModal from '../AppModal';
import React, {useState} from 'react';
import {svgIcon} from '../../../assets/svg';
import {TODAY_VISITOR_DATA} from '../../../shared/exporter';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import {GLFontsFamily, GLFontSize} from '../../../shared/exporter';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface VisitorProps {
  topHeading?: string;
}
const TodayVisitor: React.FC<VisitorProps> = ({topHeading}) => {
  const [isAppModal, setIsAppModal] = useState(false);
  const openAppModal = () => {
    setIsAppModal(!isAppModal);
  };

  return (
    <View>
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
              <View
                style={{flexDirection: 'row', width: '90%', marginVertical: 5}}>
                <View style={styles.visitorDateAndTime}>
                  {svgIcon.CalendarIcon}
                  <Text style={styles.visitDateTime}>{item.date}</Text>
                </View>
                <View style={[styles.visitorDateAndTime, {marginLeft: 10}]}>
                  {svgIcon.ClockIcon}
                  <Text style={[styles.visitDateTime]}>{item.time}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {svgIcon.LocationIcon}
                <Text style={[styles.visitLocation, {marginLeft: 5}]}>
                  {item.location}
                </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  telehealthText: {
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_16,
    marginTop: 14,
    marginLeft: 10,
  },
  visitorDateAndTime: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewButton: {
    backgroundColor: '#B2DBBF',
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  scrollContent: {
    paddingBottom: 230,
  },
  visitContainer: {
    height: 100,
    backgroundColor: '#F8F8F8',
    marginTop: 15,
    padding: 10,
    borderRadius: 12,
    elevation: 1,
  },
  visitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  visitHeaderText: {
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_16,
  },
  visitDateTime: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_14,
    alignItems: 'center',
    marginLeft: 5,
  },
  visitLocation: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_14,
    marginTop: 5,
    color: '#666',
  },
});
export default TodayVisitor;

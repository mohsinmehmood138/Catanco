import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {svgIcon} from '../../../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {GLColors, PROFILE_TAB_CONTENT, WP} from '../../../../shared/exporter';
import AppHeader from '../../../../components/complex/AppHeader';
import {
  GLFontsFamily,
  GLFontSize,
  appImages,
} from '../../../../shared/exporter';

const ProfileTab = () => {
  const navigation = useNavigation();
  const [profileName] = useState('Sarah Tom');
  const [organizationName] = useState('organization Name');

  return (
    <SafeAreaView>
      <AppHeader title="Profile" />
      <View style={styles.ProfileTabContainer}>
        <Image source={appImages.profilePic} />
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileTabHeading}>{profileName}</Text>
          <Text style={styles.organizationNameHeading}>{organizationName}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {PROFILE_TAB_CONTENT.map(item => {
          return (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => {
                navigation.navigate('ProfileStack', {
                  screen: item.tabsRoute,
                });
              }}>
              <View style={styles.profileIconBackgroundContainer}>
                {svgIcon.UserIcon}
              </View>
              <Text style={styles.profileTabHeading}>{item.tabsName}</Text>
              <View style={styles.expandMoreIcon}>
                {svgIcon.ExpandMoreIcon}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ProfileTabContainer: {
    width: '100%',
    height: WP('24'),
    backgroundColor: GLColors.Natural.LightGreen,
    paddingLeft: WP('4'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTabHeading: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_18,
  },

  listContainer: {
    width: '90%',
    height: WP('15'),
    backgroundColor: GLColors.Natural.LightGrey,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: WP('5'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIconBackgroundContainer: {
    width: WP('9'),
    height: WP('9'),
    backgroundColor: GLColors.Primary.Pale,
    borderRadius: 12,
    marginHorizontal: WP('2'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileNameContainer: {
    marginLeft: WP('2'),
  },
  organizationNameHeading: {
    fontSize: GLFontSize.FONT_SIZE_16,
  },
  expandMoreIcon: {
    position: 'absolute',
    right: WP('5'),
  },
});

export default ProfileTab;

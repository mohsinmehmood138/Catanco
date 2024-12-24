import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GLFontsFamily,
  GLFontSize,
  appImages,
  HP,
  GLColors,
  WP,
} from '../../../../shared/exporter';
import {svgIcon} from '../../../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../../components/complex/AppHeader';

const Manage_Profile_Data = [
  {
    iconName: svgIcon.UserIcon,
    name: 'Name',
    headingName: 'Sarah Tom',
  },
  {
    iconName: svgIcon.UserIcon,
    name: 'Email',
    headingName: 'abc@gmail.com',
  },
  {
    iconName: svgIcon.PhoneIcon,
    name: 'Phone number',
    headingName: '0315 7010004',
  },
];

const ManageProfile = () => {
  const navigation = useNavigation();
  const [profileName] = useState('Sara Doe');
  const [organizationName] = useState('organization Name');

  return (
    <SafeAreaView style={styles.profileContainer}>
      <AppHeader title="Manage Profile" showBackIcon={true} />
      <View style={styles.manageProfileContainer}>
        <Image
          style={styles.manageProfileImage}
          source={appImages.profilePic}
        />
        <Text style={styles.profileTabHeading}>{profileName}</Text>
        <Text style={styles.organizationNameHeading}>{organizationName}</Text>
      </View>
      <View>
        {Manage_Profile_Data.map(item => {
          return (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => navigation.navigate('DynamicScreen', {item})}>
              <View style={styles.profileIconBackgroundContainer}>
                {item.iconName}
              </View>
              <View>
                <Text style={styles.profileNameHeading}>{item.name}</Text>
                <Text style={styles.organizationNameHeading}>
                  {item.headingName}
                </Text>
              </View>
              <View style={styles.expandMoreIcon}>
                {svgIcon.ExpandMoreIcon}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.logOutButton}>
        <Text style={styles.logOutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  manageProfileContainer: {
    width: '100%',
    height: HP('20'),
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GLColors.Natural.LightGreen,
  },
  profileTabHeading: {
    fontSize: GLFontSize.FONT_SIZE_26,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  manageProfileImage: {
    width: WP('20'),
    height: WP('20'),
  },
  listContainer: {
    width: '90%',
    height: WP('18'),
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: WP('4'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GLColors.Natural.LightGrey,
  },
  profileIconBackgroundContainer: {
    width: WP('10'),
    height: WP('10'),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('2'),
    backgroundColor: 'transparent',
  },
  logOutButton: {
    position: 'absolute',
    bottom: WP('0'),
    width: WP('35'),
    height: WP('12'),
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: WP('5'),
    backgroundColor: GLColors.Natural.LightRed,
    justifyContent: 'center',
  },
  logOutButtonText: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_16,
  },
  profileContainer: {
    flex: 1,
  },
  expandMoreIcon: {
    position: 'absolute',
    right: WP('5'),
  },
  organizationNameHeading: {
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  profileNameHeading: {
    fontFamily: GLFontsFamily.InterRegular,
  },
});

export default ManageProfile;

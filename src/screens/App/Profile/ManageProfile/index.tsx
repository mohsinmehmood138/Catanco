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
  HomeTabImages,
 } from '../../../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../../components/complex/AppHeader';
import { PhoneIcon ,ExpandMoreIcon, UserIcon} from '../../../../assets/svg';

const Manage_Profile_Data = [
  {
    iconName: <UserIcon />,
    name: 'Name',
    headingName: 'Sarah Tom',
  },
  {
    iconName: <UserIcon />,
    name: 'Email',
    headingName: 'abc@gmail.com',
  },
  {
    iconName: <PhoneIcon />,
    name: 'Phone number',
    headingName: '0315 7010004',
  },
];

const ManageProfile = () => {
  const navigation = useNavigation();
  const [profileName, setProfilName] = useState('Sara Doe');
  const [organisationName, setorganisationName] = useState('Organisation Name');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader title="Manage Profile" showBackIcon={true} />
      <View style={styles.manageProfileContainer}>
        <Image
          style={styles.manageProfileImage}
          source={HomeTabImages.profilePic}
        />
        <Text style={styles.profileTabHeading}>{profileName}</Text>
        <Text
          style={[
            styles.profileTabHeading,
            {fontSize: GLFontSize.FONT_SIZE_16},
          ]}>
          {organisationName}
        </Text>
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
                <Text style={{fontFamily: GLFontsFamily.InterLight}}>
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.profileTabHeading,
                    {fontSize: GLFontSize.FONT_SIZE_16},
                  ]}>
                  {item.headingName}
                </Text>
              </View>
              <View style={{position: 'absolute', right: 20}}>
                <ExpandMoreIcon />
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
    height: 176,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: '#E8F4EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileTabHeading: {
    fontFamily: GLFontsFamily.InterExtraBold,
    fontSize: GLFontSize.FONT_SIZE_26,
  },
  manageProfileImage: {
    width: 80,
    height: 80,
  },
  listContainer: {
    width: '90%',
    height: 70,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 20,

    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIconBackgroundContainer: {
    width: 36,
    height: 36,
    backgroundColor: 'transparent',
    borderRadius: 12,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutButton: {
    width: 130,
    alignItems: 'center',
    backgroundColor: '#FFD7DB',
    height: 48,
    borderRadius: 100,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logOutButtonText: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_16,
  },
});

export default ManageProfile;

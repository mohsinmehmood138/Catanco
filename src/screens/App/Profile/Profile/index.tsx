import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Profile_Tab_Content} from '../../../../shared/exporter';
import {ExpandMoreIcon, UserIcon} from '../../../../assets/svg';
import AppHeader from '../../../../components/complex/AppHeader';
import {GLFontsFamily, GLFontSize, appImages} from '../../../../shared/exporter';
import {View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native';

const ProfileTab = () => {
  const navigation = useNavigation();
  const [profileName, setProfilName] = useState('Sarah Tom');
  const [organisationName, setorganisationName] = useState('Organisation Name');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader title="Profile" />
      <View style={styles.ProfileTabContainer}>
        <Image source={appImages.profilePic} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.profileTabHeading}>{profileName}</Text>
          <Text
            style={[
              styles.profileTabHeading,
              {fontSize: GLFontSize.FONT_SIZE_16},
            ]}>
            {organisationName}
          </Text>
        </View>
      </View>
      <View>
        {Profile_Tab_Content.map(item => {
          return (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => navigation.navigate(item.tabsRoute)}>
              <View style={styles.profileIconBackgroundContainer}>
                <UserIcon />
              </View>
              <Text style={styles.profileTabHeading}>{item.tabsname}</Text>
              <View style={{position: 'absolute', right: 20}}>
                <ExpandMoreIcon />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ProfileTabContainer: {
    width: '100%',
    height: 98,
    backgroundColor: '#B2DBBF',
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTabHeading: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_18,
  },

  listContainer: {
    width: '90%',
    height: 60,
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
    backgroundColor: '#D7D7FF',
    borderRadius: 12,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileTab;

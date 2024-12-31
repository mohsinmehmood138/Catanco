import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {svgIcon} from '../../../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../../components/complex/AppHeader';
import {GLColors, PROFILE_TAB_CONTENT, WP} from '../../../../shared/exporter';
import {
  appImages,
  GLFontSize,
  GLFontsFamily,
} from '../../../../shared/exporter';

const ProfileTab = () => {
  const navigation = useNavigation();
  const [profileName] = useState('Sarah Tom');
  const [organizationName] = useState('organization Name');

  const positionAnim = useRef(new Animated.Value(100)).current;

  const startSpringAnimation = () => {
    Animated.spring(positionAnim, {
      toValue: 0,
      friction: 2,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startSpringAnimation();
  }, []);

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
        {PROFILE_TAB_CONTENT.map((item, index) => {
          return (
            <Animated.View style={[{transform: [{translateY: positionAnim}]}]}>
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
            </Animated.View>
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

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

  const scaleValue = useRef(new Animated.Value(1)).current;

  const startScaleAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.5,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

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
    startScaleAnimation();
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
            <Animated.View style={[{transform: [{scale: scaleValue}]}]}>
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
    backgroundColor: GLColors.Natural.LightGreen,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: WP('4'),
    height: WP('24'),
    width: '100%',
  },
  profileTabHeading: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_18,
  },

  listContainer: {
    backgroundColor: GLColors.Natural.LightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: WP('5'),
    borderRadius: 12,
    height: WP('15'),
    width: '90%',
  },
  profileIconBackgroundContainer: {
    backgroundColor: GLColors.Primary.Pale,
    marginHorizontal: WP('2'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: WP('9'),
    width: WP('9'),
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

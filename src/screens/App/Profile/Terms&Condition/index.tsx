import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppHeader from '../../../../components/complex/AppHeader';
import {
  TERMS_AND_CONDITION,
  GLFontsFamily,
  WP,
  GLFontSize,
} from '../../../../shared/exporter';

const TermsAndCondition = () => {
  return (
    <SafeAreaView>
      <AppHeader title="Terms & Condition" showBackIcon={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TermsAndConditionContainer}>
          {TERMS_AND_CONDITION.map(item => {
            return (
              <>
                <Text style={styles.TermsAndConditionHeading}>
                  {item.heading}
                </Text>
                <Text style={styles.TermsAndConditionText}>{item.text}</Text>
              </>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TermsAndConditionContainer: {
    paddingHorizontal: WP('5'),
    paddingBottom: WP('5'),
  },
  TermsAndConditionHeading: {
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  TermsAndConditionText: {
    lineHeight: WP('5'),
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.InterLight,
    textAlign: 'justify',
    marginVertical: WP('2'),
  },
});

export default TermsAndCondition;

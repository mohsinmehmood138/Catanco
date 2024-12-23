import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AppHeader from '../../../../components/complex/AppHeader';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {TERMS_AND_CONDITION, GLFontsFamily} from '../../../../shared/exporter';

const TermsAndCondition = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  TermsAndConditionHeading: {
    fontFamily: GLFontsFamily.InterExtraBold,
  },
  TermsAndConditionText: {
    lineHeight: 15,
    fontSize: 12,
    fontFamily: GLFontsFamily.InterLight,
    textAlign: 'justify',
    marginVertical: 10,
  },
});

export default TermsAndCondition;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GLFontsFamily} from '../../shared/exporter';
import {ScrollView} from 'react-native-gesture-handler';
import AppHeader from '../../components/complex/AppHeader';
import {Terms_And_Condition} from '../../shared/exporter';

const TermsAndCondition = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader title="Terms & Condition" showBackIcon={true}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TermsAndConditionContainer}>
          {Terms_And_Condition.map(item => {
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
    </View>
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

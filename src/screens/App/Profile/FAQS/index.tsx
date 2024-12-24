import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {svgIcon} from '../../../../assets/svg';
import Accordion from 'react-native-collapsible/Accordion';
import {FAQS_LIST_DATA, GLColors, WP} from '../../../../shared/exporter';
import AppHeader from '../../../../components/complex/AppHeader';
import {GLFontsFamily, GLFontSize} from '../../../../shared/exporter';

const AccordionView = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section: any, isActive: boolean) => (
    <View
      style={[
        styles.header,
        isActive
          ? {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }
          : {borderRadius: 8},
      ]}>
      <Text style={styles.headerText}>{section.title}</Text>
      {svgIcon.ExpandMoreIcon}
    </View>
  );

  const renderContent = (section: any) => (
    <View style={styles.content}>
      <Text style={styles.contentText}>{section.content}</Text>
    </View>
  );

  const updateSections = (activeSections: any) =>
    setActiveSections(activeSections);

  return (
    <Accordion
      sections={FAQS_LIST_DATA}
      activeSections={activeSections}
      renderHeader={(section: any, index: number, isActive: boolean) =>
        renderHeader(section, index, isActive)
      }
      renderContent={renderContent}
      onChange={updateSections}
      underlayColor="transparent"
    />
  );
};

const FAQS = () => {
  return (
    <SafeAreaView>
      <AppHeader title="FAQ’s" showBackIcon={true} />
      <View style={styles.faqsContainer}>
        <View style={styles.searchContainer}>
          {svgIcon.UserIcon}
          <TextInput style={styles.faqsSearchInput} placeholder="Search" />
        </View>
        <View style={styles.accordionContainer}>
          <AccordionView />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  faqsContainer: {
    paddingTop: WP('5'),
  },
  searchContainer: {
    backgroundColor: GLColors.Natural.LightGrey,
    height: WP('14'),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    flexDirection: 'row',
  },
  faqsSearchInput: {
    width: '80%',
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_15,
    marginLeft: WP('4'),
  },
  accordionContainer: {
    marginTop: WP('5'),
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: GLColors.Natural.LightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: WP('4'),
    marginTop: 5,
  },
  headerText: {
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterBold,
    textAlign: 'left',
  },
  content: {
    backgroundColor: GLColors.Natural.LightGrey,
    padding: WP('2'),
    paddingHorizontal: WP('4'),
    height: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  contentText: {
    color: 'black',
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterRegular,
  },
});

export default FAQS;

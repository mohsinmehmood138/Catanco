import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
  FAQS_LIST_DATA,
} from '../../../../shared/exporter';
import {svgIcon} from '../../../../assets/svg';
import Accordion from 'react-native-collapsible/Accordion';
import AppHeader from '../../../../components/complex/AppHeader';

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
    paddingHorizontal: WP('5'),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: WP('14'),
    borderRadius: 12,
    width: '90%',
  },
  faqsSearchInput: {
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_15,
    marginLeft: WP('4'),
    width: '80%',
  },
  accordionContainer: {
    marginTop: WP('5'),
    alignSelf: 'center',
    width: '90%',
  },
  header: {
    backgroundColor: GLColors.Natural.LightGrey,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: WP('4'),
    marginTop: 5,
  },
  headerText: {
    fontFamily: GLFontsFamily.InterBold,
    fontSize: GLFontSize.FONT_SIZE_16,
    color: GLColors.Natural.Black,
    textAlign: 'left',
  },
  content: {
    backgroundColor: GLColors.Natural.LightGrey,
    borderBottomRightRadius: 8,
    paddingHorizontal: WP('4'),
    borderBottomLeftRadius: 8,
    padding: WP('2'),
    height: '100%',
  },
  contentText: {
    fontFamily: GLFontsFamily.InterRegular,
    fontSize: GLFontSize.FONT_SIZE_16,
    color: 'black',
  },
});

export default FAQS;

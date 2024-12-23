import React, {useState} from 'react';
import {svgIcon} from '../../../../assets/svg';
import Accordion from 'react-native-collapsible/Accordion';
import {FAQS_LIST_DATA} from '../../../../shared/exporter';
import AppHeader from '../../../../components/complex/AppHeader';
import {GLFontsFamily, GLFontSize} from '../../../../shared/exporter';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const AccordionView = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section: any, index: number, isActive: boolean) => (
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
    <View
      style={[
        styles.content,
        {borderBottomLeftRadius: 8, borderBottomRightRadius: 8},
      ]}>
      <Text style={styles.contentText}>{section.content}</Text>
    </View>
  );

  const updateSections = (activeSections: any) =>
    setActiveSections(activeSections);

  return (
    <Accordion
      sections={FAQS_LIST_DATA}
      activeSections={activeSections}
      renderHeader={(section, index, isActive) =>
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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader title="FAQ’s" showBackIcon={true} />
      <View style={styles.FAQsContainer}>
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
  FAQsContainer: {
    paddingTop: 20,
  },
  searchContainer: {
    backgroundColor: '#F8F8F8',
    height: 56,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  faqsSearchInput: {
    width: '80%',
    fontFamily: GLFontsFamily.InterMedium,
    fontSize: GLFontSize.FONT_SIZE_15,
    marginLeft: 15,
  },
  accordionContainer: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontFamily: GLFontsFamily.InterBold,
    textAlign: 'left',
  },
  content: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    height: '100%',
  },
  contentText: {
    color: 'black',
    fontSize: 16,
    fontFamily: GLFontsFamily.InterRegular,

    height: 'auto',
  },
});

export default FAQS;

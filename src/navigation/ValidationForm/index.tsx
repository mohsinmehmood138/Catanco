// import React, {useState, useRef} from 'react';
// import {View, StyleSheet} from 'react-native';
// import {ExpandMoreIcon} from '../../assets/svg';
// import PhoneInput from 'react-native-phone-input';
// import AppHeader from '../../components/complex/AppHeader';
// import CountryPicker from 'react-native-country-picker-modal';
// import {GLFontsFamily, GLFontSize} from '../../shared/exporter';

// const ValidationForm = () => {
//   const phoneInputRef = useRef(null);

//   const [isValid, setIsValid] = useState(true);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [countryCode, setCountryCode] = useState('US');
//   const [showFlagModal, setShowFlagModal] = useState(false);

//   const onSelectCountry = (country: any) => {
//     setCountryCode(country.cca2);
//     if (phoneInputRef.current) {
//       phoneInputRef.current.setValue(country.callingCode[0]);
//     }
//     setShowFlagModal(false);
//   };

//   const onChangePhoneNumber = (number: any) => {
      
//     setPhoneNumber(number);
//     const valid = phoneInputRef.current?.isValidNumber(number);
//     if (valid) {
//       console.log('moja he moja');
//     } else {
//       console.log('number is invalid', number);
//     }
//     setIsValid(valid);
//   };

//   return (
//     <>
//       <AppHeader title="Validation Forms" />
//       <View style={styles.container}>
//         <View style={styles.phoneInputContainer}>
//           {showFlagModal && (
//             <CountryPicker
//               countryCode={countryCode}
//               withCallingCode
//               onSelect={onSelectCountry}
//               visible={showFlagModal}
//               onClose={() => setShowFlagModal(false)}
//             />
//           )}
          
//           <View style={{position: 'absolute', left: 45, top: 8}}>
//             <ExpandMoreIcon />
//           </View>

//           <PhoneInput
//             ref={phoneInputRef}
//             onPressFlag={() => setShowFlagModal(true)}
//             // initialCountry="us"
//             initialValue="923049617020"
//             onChangePhoneNumber={onChangePhoneNumber}
//             style={styles.phoneInput}
//             textProps={{
//               placeholder: 'Enter a phone number...',
//             }}
//             textStyle={{
//               fontFamily: GLFontsFamily.InterBold,
//               fontSize: GLFontSize.FONT_SIZE_14,
//             }}
//             offset={30}
//           />
//         </View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop: 50,
//     alignItems: 'center',
//   },
//   phoneInputContainer: {
//     flexDirection: 'row',
//     backgroundColor: 'grey',
//     borderRadius: 8,
//   },
//   phoneInput: {
//     flex: 1,
//     padding: 10,
//   },
//   errorText: {
//     color: 'grey',
//     marginTop: 10,
//   },
// });

// export default ValidationForm;

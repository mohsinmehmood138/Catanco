import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TextInput,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {appIcons, GLFontSize, WP} from '../../../shared/exporter';
import {GLColors, GLFontsFamily} from '../../../shared/exporter';

interface AppInputProps extends TextInputProps {
  label: string;
  placeholder: string;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'phone-pad'
    | 'decimal-pad'
    | 'ascii-capable'
    | 'email-address'
    | 'visible-password';
  errors?: any;
  countryCode?: any;
  setCountryCode?: any;
  isRequired?: boolean;
  date?: Date | string;
  isDatePicker?: boolean;
  labelStyle?: TextStyle;
  selectCountry?: boolean;
  customStyle?: ViewStyle;
  secureTextEntry?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  errors,
  labelStyle,
  customStyle,
  countryCode,
  placeholder,
  selectCountry,
  setCountryCode,
  isRequired = false,
  date = 'Enter Date',
  isDatePicker = false,
  secureTextEntry = false,
  keyboardType = 'default',
  ...rest
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | string>(date);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleDateChange = (newDate: Date | undefined) => {
    setShowDatePicker(false);
    if (newDate) {
      setSelectedDate(newDate);
    }
  };

  const onSelect = (country: any) => {
    setCountryCode(country);
  };

  return (
    <View style={[styles.container, customStyle]}>
      <Text style={[styles.label, labelStyle]}>
        {label} <Text style={styles.star}>*</Text>
      </Text>

      {!isDatePicker ? (
        <View style={styles.inputContainer}>
          {selectCountry && (
            <TouchableOpacity
              style={styles.icon}
              onPress={togglePasswordVisibility}>
              <CountryPicker
                {...{
                  countryCode,
                  onSelect,
                }}
                countryCode={countryCode}
              />
            </TouchableOpacity>
          )}

          <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            {...rest}
          />

          {secureTextEntry && (
            <TouchableOpacity
              style={styles.icon}
              onPress={togglePasswordVisibility}>
              {!isPasswordVisible && (
                <Image source={appIcons.showPasswordIcon} />
              )}
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.inputContainer]}
          onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>
            {selectedDate instanceof Date
              ? selectedDate.toDateString()
              : selectedDate}
          </Text>
          <Icon name="calendar-outline" size={24} color="#A1A1A1" />
        </TouchableOpacity>
      )}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate instanceof Date ? selectedDate : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      {errors && <Text style={styles.errorText}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP('90'),
    marginVertical: WP('2'),
    alignSelf: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: GLFontSize.FONT_SIZE_16,
    color: GLColors.Natural.Black,
    marginBottom: WP('1'),
    fontFamily: GLFontsFamily.InterBold,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    height: WP('12'),
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GLColors.Natural.DarkGrey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('2'),
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: WP('2'),
    paddingVertical: WP('2'),
  },
  icon: {
    marginLeft: WP('2'),
  },
  star: {
    color: GLColors.Primary.PinkishRed,
    fontSize: GLFontSize.FONT_SIZE_20,
  },
  errorText: {
    marginTop: WP('2'),
    marginLeft: WP('2'),
    alignSelf: 'flex-start',
    color: GLColors.Primary.PinkishRed,
    fontFamily: GLFontsFamily.InterLight,
  },
});

export default AppInput;

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
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'phone-pad'
    | 'decimal-pad'
    | 'ascii-capable'
    | 'email-address'
    | 'visible-password';
  errors?: any;
  label: string;
  countryCode?: any;
  placeholder: string;
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
      <Text style={[styles.label]}>
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
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: WP('2'),
  },
  label: {
    marginBottom: WP('1'),
    alignSelf: 'flex-start',
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.InterBold,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    height: WP('12'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: WP('2'),
    borderColor: GLColors.Natural.DarkGrey,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: WP('2'),
    paddingHorizontal: WP('2'),
  },
  icon: {
    marginLeft: WP('2'),
  },
  star: {
    fontSize: GLFontSize.FONT_SIZE_20,
    color: GLColors.Primary.PinkishRed,
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

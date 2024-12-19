import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';
import {GLColors, GLFontsFamily} from '../../../shared/exporter';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AppInputProps extends TextInputProps {
  label: string;
  placeholder: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'decimal-pad'
    | 'ascii-capable'
    | 'visible-password';
  secureTextEntry?: boolean;
  customStyle?: ViewStyle;
  labelStyle?: TextStyle;
  isRequired?: boolean;
  isDatePicker?: boolean;
  date?: Date | string;
  errors?: any;
  setCountryCode?: any;
  countryCode?: any;
  selectCountry?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  customStyle,
  labelStyle,
  isRequired = false,
  isDatePicker = false,
  date = 'Enter Date',
  errors,
  setCountryCode,
  countryCode,
  selectCountry,
  ...rest
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | string>(date);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleDateChange = (event: any, newDate: Date | undefined) => {
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
              <Icon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="#A1A1A1"
              />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity
          style={[
            styles.inputContainer,
            {justifyContent: 'center', alignItems: 'center'},
          ]}
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
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
  },
  inputContainer: {
    width: '100%',
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },
  star: {
    color: 'red',
    fontSize: 20,
  },
  errorText: {
    alignSelf: 'flex-start',
    marginTop: 8,
    marginLeft: 10,
    fontFamily: GLFontsFamily.InterLight,
    color: GLColors.Red.R6,
  },
});

export default AppInput;

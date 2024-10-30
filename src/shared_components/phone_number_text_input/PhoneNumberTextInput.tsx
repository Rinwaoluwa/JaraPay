import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AppText } from '../text/AppText';
import { AppColors } from '@/src/config/utils/Colors';
import { fontPixel } from '@/src/config/utils/Responsiveness';

import { Controller } from 'react-hook-form';
import { styles } from './styles';

interface PhoneInputProps {
  onPressContacts?: () => void;
  countryCode?: string;
  placeholder?: string;
  control: any;
  name: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  onPressContacts,
  countryCode = '+234',
  placeholder = 'Enter phone number',
  control,
  name,
}) => {

  return (
    <>
      <AppText marginBottom={8}>
        Phone number
      </AppText>
      <View style={styles.container}>
        <View style={styles.countryCodeContainer}>
          <AppText fontSize={fontPixel(14)} fontWeight="bold" color={AppColors.white}>
            {countryCode}
          </AppText>
        </View>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              keyboardType="numeric"
              maxLength={11}
            />
          )}
          name={name}
        />

        <TouchableOpacity
          style={styles.contactsButton}
          onPress={onPressContacts}
        >
          <MaterialIcons
            name="contacts"
            size={20}
            color={AppColors.primary}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

import { StyleSheet } from 'react-native';
import { AppColors } from '@/src/config/utils/Colors';
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '@/src/config/utils/Responsiveness';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: AppColors.primary,
      borderRadius: 10,
      backgroundColor: AppColors.white,
      overflow: 'hidden',
    },
    countryCodeContainer: {
      backgroundColor: AppColors.primary,
      paddingHorizontal: pixelSizeHorizontal(12),
      paddingVertical: pixelSizeVertical(15),
      justifyContent: 'center',
    },
    input: {
      flex: 1,
      paddingHorizontal: pixelSizeHorizontal(12),
      paddingVertical: pixelSizeVertical(12),
      fontSize: fontPixel(14),
      color: '#1F2937',
    },
    contactsButton: {
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
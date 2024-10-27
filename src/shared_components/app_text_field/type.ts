import { SvgName } from "@/src/config/utils/Svgs";
import { Control } from "react-hook-form";
import { TextStyle, ViewStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type IconName = keyof typeof Ionicons.glyphMap;
//extends Omit<AppTextInputProps, 'onBlur' | 'onFocus'> 
export interface AppTextInputProps {
    label: string;
    name: string;
    error?: string;
    placeholder?: string;
    prefix?: IconName;
    suffix?: IconName;
    control: Control<any, any>;
    editable?: boolean;
    width?: number,
    onPress?: () => void;
    onPressPrefixIcon?: () => void;
    onPressSuffixIcon?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    style?: TextStyle;
    containerStyle?: ViewStyle;
}



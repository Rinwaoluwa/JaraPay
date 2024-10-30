import { SvgName } from "@/src/config/utils/Svgs";
import { TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

export interface SvgProp extends SvgProps, Pick<TextStyle, 'color'> {
    name: SvgName;
    size?: number;
    iconColor?: string;
    stroke?: string;
    iconOpacity?: number;
    strokeWidth?: number;
    focused?: boolean;
    showBackgroundColor?: boolean;
    backgroundColor?: string;
    opacity?: number;
    borderRadius?: number;
  }
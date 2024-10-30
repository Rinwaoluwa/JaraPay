import { AppThemePallete } from "@/src/config/hooks/useThemeColor";
import { AppColorPallete } from "@/src/config/utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import {  PressableProps } from "react-native";




type IconName = keyof typeof Ionicons.glyphMap;
export interface AppIconProps extends PressableProps  {
    name: IconName;
    size?: number;
    color?: AppColorPallete;
    onPress?: () => void;
    onLongPress?: () => void;
    
}

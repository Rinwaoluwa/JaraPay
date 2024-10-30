import { AppColorPallete } from "@/src/config/utils/Colors";
import { TextStyle, ViewStyle } from "react-native";


export interface AppCheckBoxProps {
activeColor?: AppColorPallete;
inactiveColor?: AppColorPallete;
size?: number;
text?: string;
iconStyle?: ViewStyle;
innerIconStyle?: ViewStyle;
textStyle?: TextStyle;
onPress: (isChecked: boolean) => void;
}

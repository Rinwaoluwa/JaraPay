import { useColorScheme } from "react-native";
import { Theme } from "@/src/config/theme/Theme";

export function useThemeColor(
  colorName: keyof typeof Theme.light & keyof typeof Theme.dark,
  props?: { light?: string; dark?: string },
) {
  const theme = useColorScheme() ?? "light";  
  const colorFromProps = props !== undefined && props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Theme[theme][colorName];
  }
}

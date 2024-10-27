import { Text } from "react-native";
import { AppTextStyle } from "./type";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { fontPixel } from "@/src/config/utils/Responsiveness";

export function AppText({
  children,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  ...styleProps
}: AppTextStyle) {
  const fontColor = color ?? useThemeColor("text");
  return (
    <Text
      style={{
        color: fontColor,
        fontSize: fontPixel(fontSize ?? 16),
        fontWeight: fontWeight ?? "500",
        fontFamily: fontFamily ?? "Satoshi",
        ...styleProps,
      }}
    >
      {children}
    </Text>
  );
}

import { Text } from "react-native";
import { AppTextStyle } from "./type";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { fontPixel } from "@/src/config/utils/Responsiveness";
import { ForwardedRef, forwardRef } from "react";

export const AppText = forwardRef(({
  children,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  ...styleProps
}: AppTextStyle, ref: ForwardedRef<Text>) => {
  const fontColor = color ?? useThemeColor("text");
  
  return (
    <Text
      ref={ref}
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
});

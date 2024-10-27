import { Text, StyleSheet } from "react-native";
import { AppTextStyle } from "./type";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { forwardRef } from "react";
import { fontPixel } from "@/src/config/utils/Responsiveness";

export function AppText({
  children,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textAlignVertical,
  textDecorationColor,
  textDecorationLine,
  textDecorationStyle,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
  writingDirection,
  width,
  padding,
  paddingBottom,
  paddingEnd,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingStart,
  paddingTop,
  paddingVertical,
}: AppTextStyle) {
  const fontColor = color ?? useThemeColor("text");
  return (
    <Text
      style={{
        color: fontColor,
        width: width,
        padding: padding,
        paddingBottom: paddingBottom,
        paddingEnd: paddingEnd,
        paddingHorizontal: paddingHorizontal,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingStart: paddingStart,
        paddingTop: paddingTop,
        paddingVertical: paddingVertical,
        fontSize: fontPixel(fontSize ?? 16),
        fontStyle: fontStyle,
        fontWeight: fontWeight ?? "500",
        letterSpacing: letterSpacing,
        lineHeight: lineHeight,
        textAlign: textAlign,
        textAlignVertical: textAlignVertical,
        textDecorationColor: textDecorationColor,
        textDecorationLine,
        fontFamily: fontFamily ?? "Satoshi",
        textDecorationStyle: textDecorationStyle,
        textShadowColor: textShadowColor,
        textShadowOffset: textShadowOffset,
        textShadowRadius: textShadowRadius,
        textTransform: textTransform,
        writingDirection: writingDirection,
      }}
    >
      {children}
    </Text>
  );
}

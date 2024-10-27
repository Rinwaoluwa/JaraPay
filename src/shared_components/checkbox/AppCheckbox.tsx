import BouncyCheckbox, {
  BouncyCheckboxProps,
} from "react-native-bouncy-checkbox";
import React from "react";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { AppCheckBoxProps } from "./type";
import { AppColors } from "@/src/config/utils/Colors";

export default function AppCheckbox({
  activeColor,
  iconStyle,
  inactiveColor,
  innerIconStyle,
  onPress,
  size,
  text,
  textStyle,
}: AppCheckBoxProps) {
  const tintColor = activeColor ?? useThemeColor("primary");
  return (
    <BouncyCheckbox
      size={size ?? 25}
      fillColor={tintColor}
      unFillColor={inactiveColor ?? AppColors.white}
      text={text}
      style={{borderRadius: 0}}
      iconStyle={{ borderColor: "red", borderRadius: 0, ...iconStyle }}
      innerIconStyle={{ borderWidth: 2, ...innerIconStyle }}
      textStyle={{ textAlign: "center", fontFamily: "Satoshi", ...textStyle }}
      onPress={onPress}
    />
  );
}

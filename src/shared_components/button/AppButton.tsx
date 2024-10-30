import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  Text,
} from "react-native";
import React from "react";
import { AppButtonProps } from "./type";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { AppColorPallete, AppColors } from "@/src/config/utils/Colors";
import { Row } from "../row/Row";
import { heightPixel, normalise, widthPixel } from "@/src/config/utils/Responsiveness";
import { AppText } from "../text/AppText";

export function AppButton({
  title,
  onPress,
  prefix,
  suffix,
  isEnabled = true,
  loading = false,
  loadingIcon,
  loadingIconPosition = "left",
  borderButton = false,
  color,
  borderRadius,
  height,
  textColor,
  width,
  textSize,
}: AppButtonProps) {
  const buttonColor = color ?? useThemeColor("primary");
  const loadingIconComponent = loadingIcon ?? <ActivityIndicator />;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (isEnabled) {
          onPress();
          Keyboard.dismiss();
        }
      }}
    >
      <View
        style={{
          borderColor: borderButton ? buttonColor : AppColors.transparent,
          borderWidth: borderButton ? 1 : 0,
          height: height  ?? heightPixel(60),
          width: width ?? widthPixel(374),
          borderRadius: normalise(borderRadius ?? 10),
          backgroundColor: borderButton ? AppColors.transparent : buttonColor,
          ...styles.button,
        }}
      >
        <Row spacing={8}>
          {loading && loadingIconPosition === "left"
            ? loadingIconComponent
            : prefix}
          <AppText
            color={
              textColor ??
              ((borderButton
                ? buttonColor
                : AppColors.white) as AppColorPallete)
            }
            fontSize={textSize}
          >
            {title}
          </AppText>
          {loading && loadingIconPosition === "right"
            ? loadingIconComponent
            : suffix}
        </Row>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});

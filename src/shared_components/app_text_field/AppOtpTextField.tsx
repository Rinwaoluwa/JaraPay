import { OtpInput, OtpInputProps } from "react-native-otp-entry";
import React from "react";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { heightPixel, widthPixel } from "@/src/config/utils/Responsiveness";

export function AppOtpTextField({ ...props }: OtpInputProps) {
    const color = useThemeColor('primary');
  return (
    <OtpInput
      numberOfDigits={props.numberOfDigits ?? 6}
      focusColor={color}
      focusStickBlinkingDuration={500}
      {...props}
      textInputProps={{
        accessibilityLabel: "One-Time Password",
      }}
      theme={{
        ...props.theme,
        pinCodeContainerStyle: {
            ...props.theme?.pinCodeContainerStyle,
            width: props.theme?.pinCodeContainerStyle?.width ??  widthPixel(50),
            height: props.theme?.pinCodeContainerStyle?.height ?? heightPixel(50)
        }
      }}
    />
  );
}

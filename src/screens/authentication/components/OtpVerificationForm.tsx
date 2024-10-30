import { View, Text } from "react-native";
import React from "react";
import { AppColors } from "@/src/config/utils/Colors";
import { heightPixel } from "@/src/config/utils/Responsiveness";
import { AppOtpTextField } from "@/src/shared_components/app_text_field/AppOtpTextField";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import AppSvgIcon from "@/src/shared_components/svg_icon/AppSvg";
import { AppText } from "@/src/shared_components/text/AppText";
import { AppTouchableText } from "@/src/shared_components/text/AppTouchableText";

export default function OtpVerificationForm() {
  return (
    <>
      <AppSvgIcon name={"otp"} style={{alignSelf: 'center'}} />
      <Spacing height={heightPixel(31)} />
      <AppText textAlign="center">
        Please enter the 4 digit code sent to your phone number{"\n"}
        <AppText color={AppColors.primary}>+2348973621234</AppText>
      </AppText>
      <Spacing height={heightPixel(31)} />
      <AppOtpTextField onFilled={(pin) => {}} />
      <Spacing height={heightPixel(16)} />
      <AppTouchableText
        textAlign="center"
        color={AppColors.primary}
        onPress={() => {
          console.log("RESEND TEXXT");
        }}
      >
        Resend Code
      </AppTouchableText>
    </>
  );
}

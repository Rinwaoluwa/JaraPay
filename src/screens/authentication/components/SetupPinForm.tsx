import { View, Text } from "react-native";
import React from "react";
import { heightPixel } from "@/src/config/utils/Responsiveness";
import { AppOtpTextField } from "@/src/shared_components/app_text_field/AppOtpTextField";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import AppSvgIcon from "@/src/shared_components/svg_icon/AppSvg";
import { AppText } from "@/src/shared_components/text/AppText";

export default function SetupPinForm() {
  return (
    <>
      <AppSvgIcon name="pin" style={{ alignSelf: "center" }} />
      <Spacing height={heightPixel(31)} />
      {/* REPLACE TITLE WITH ['Confirm Transaction PIN'] WHEN PIN HAS BEEN VALIDATED  */}
      <AppText textAlign="center" >Enter Transaction PIN</AppText>
      <Spacing height={heightPixel(18)} />
      <AppOtpTextField
        numberOfDigits={4}
        theme={{
          containerStyle: {
            justifyContent: "space-evenly",
          },
        }}
      />
    </>
  );
}

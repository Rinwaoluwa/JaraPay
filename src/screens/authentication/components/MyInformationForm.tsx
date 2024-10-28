import React from "react";
import { AppColors } from "@/src/config/utils/Colors";
import { heightPixel, widthPixel } from "@/src/config/utils/Responsiveness";
import { AppTextInput } from "@/src/shared_components/app_text_field/AppTextField";
import AppCheckbox from "@/src/shared_components/checkbox/AppCheckbox";
import { Row } from "@/src/shared_components/row/Row";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import { AppText } from "@/src/shared_components/text/AppText";
import { useForm } from "react-hook-form";
import { AppTouchableText } from "@/src/shared_components/text/AppTouchableText";

export default function MyInformationForm() {
  const { control } = useForm();

  return (
    <>
      <AppTextInput
        label="First name"
        control={control}
        name="r"
        placeholder="e.g John"
      />
      <Spacing height={heightPixel(14)} />
      <AppTextInput
        label="Last name"
        control={control}
        name="r"
        placeholder="e.g Doe"
      />
      <Spacing height={heightPixel(14)} />
      <AppTextInput
        label="E-mail address"
        control={control}
        name="r"
        placeholder="e.g Johndoe@123.com"
      />
      <Spacing height={heightPixel(14)} />
      <AppTextInput
        label="Phone number"
        control={control}
        name="r"
        placeholder="e.g Johndoe@123.com"
      />
      <Spacing height={heightPixel(14)} />
      <AppTextInput
        label="Referral Code"
        control={control}
        name="r"
        placeholder="e.g Jarapay795"
      />
      <Spacing height={heightPixel(14)} />
      <Row>
        <AppCheckbox
          onPress={(icChecked) => {
            console.log("CHHECKED VALUE", icChecked);
          }}
        />
        <AppText
          maxWidth={widthPixel(300)}
          textAlign="center"
          fontSize={14}
          fontWeight={"400"}
        >
          I agree to the {"  "}
          <AppTouchableText color={AppColors.primary} fontWeight={"500"}>
            Terms and Conditions
          </AppTouchableText>
          {"  "}
          and{"  "}
          <AppTouchableText color={AppColors.primary} fontWeight={"500"}>
            Privacy Policy
          </AppTouchableText>
        </AppText>
      </Row>
    </>
  );
}

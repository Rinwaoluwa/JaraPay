import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  fontPixel,
  heightPixel,
  widthPixel,
} from "@/src/config/utils/Responsiveness";
import { AppTextInput } from "@/src/shared_components/app_text_field/AppTextField";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import AppSvgIcon from "@/src/shared_components/svg_icon/AppSvg";
import { Row } from "@/src/shared_components/row/Row";
import { AppIcon } from "@/src/shared_components/icon/AppIcon";
import { AppText } from "@/src/shared_components/text/AppText";
import { AppColors } from "@/src/config/utils/Colors";

export default function CreatePasswordForm() {
  const { control } = useForm();

  const [passwordFieldsState, setPasswordFieldsState] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const passwordRules = [
    "Contains at least 8 characters",
    "Must have at least one symbol (@#$%^&*()_+)",
    "Must have at least Lower case (abcde)",
    "Must have at least one Upper case (abcde)",
    "Must have at least one number (1234567890)",
  ];
  return (
    <>
      <AppSvgIcon name="password" style={{ alignSelf: "center" }} />
      <AppTextInput
        control={control}
        name="password"
        label="Create password"
        placeholder="Password"
        suffix="eye-sharp"
      />
      <Spacing height={heightPixel(16)} />
      <AppTextInput
        control={control}
        name="confirm-password"
        label="Confirm password"
        placeholder="Password"
        suffix="eye-sharp"
      />
      <Spacing height={heightPixel(8)} />
      <View style={styles.passwordRulesContainer}>
        {passwordRules.map((rule, index) => {
          return (
            <Row key={`${rule}${index}`} alignItems="center">
              <AppIcon name="checkmark-circle-outline" />
              <AppText fontWeight={"400"} fontSize={fontPixel(12)}>
                {rule}
              </AppText>
            </Row>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  passwordRulesContainer: {
    backgroundColor: AppColors.primary50,
    paddingHorizontal: widthPixel(8),
    paddingVertical: heightPixel(8),
  },
});

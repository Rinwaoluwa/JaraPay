import { View, Text } from "react-native";
import React, { useState } from "react";
import { heightPixel } from "@/src/config/utils/Responsiveness";
import { Box } from "@/src/shared_components/box/Box";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import { AppTextInput } from "@/src/shared_components/app_text_field/AppTextField";
import { useForm } from "react-hook-form";
import { AppButton } from "@/src/shared_components/button/AppButton";
import { router } from "expo-router";
import AppSvgIcon from "@/src/shared_components/svg_icon/AppSvg";

export default function LoginScreen() {
  const { control } = useForm();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    // [applySafeArea] is set to false because header already handles it
    <Box applySafeArea={false}>
      <Spacing height={heightPixel(40)} />
      <AppTextInput
        label="E-mail address"
        control={control}
        name="email"
        placeholder="e.g Johndoe@123.com"
      />
      <Spacing height={heightPixel(14)} />
      <AppTextInput
        control={control}
        label="password"
        name="password"
        placeholder="Password"
        secureTextEntry={secureTextEntry}
        suffix={secureTextEntry ? "eye-sharp" : "eye-off-sharp"}
        onPressSuffixIcon={() => setSecureTextEntry(!secureTextEntry)}
      />
      <Spacing height={heightPixel(20)} />
      <AppButton title="Login" onPress={() => {
          //FOR DEMO LATER USE ROUTE PROTECTION 
          router.push('/(tabs)/')
        }} />
        <Spacing height={heightPixel(20)} />
        {/* <AppSvgIcon name="history" fill="red" style={{color:'red'}}  /> */}
    </Box>
  );
}

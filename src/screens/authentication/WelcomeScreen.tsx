import { View, Text } from "react-native";
import React from "react";
import { Box } from "@/src/shared_components/box/Box";
import AppSvgIcon from "@/src/shared_components/svg_icon/AppSvg";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import { fontPixel, heightPixel } from "@/src/config/utils/Responsiveness";
import { AppText } from "@/src/shared_components/text/AppText";
import { AppColors } from "@/src/config/utils/Colors";
import { AppButton } from "@/src/shared_components/button/AppButton";

export function WelcomeScreen() {
  return (
    <Box alignItems="center" justifyContent="center">
      <AppSvgIcon name="demo-loading" />
      <Spacing height={heightPixel(16)} />
      <AppText textAlign="center" fontWeight={"700"} fontSize={fontPixel(20)}>
        Welcome to <AppText color={AppColors.primary}>JaraPay</AppText>{" "}
      </AppText>
      <AppText fontWeight={"400"} fontSize={fontPixel(14)} textAlign="center">
        Introducing Jara Pay - Simplified Payments. Effortlessly request and
        make secure transactions anytime, anywhere. Join us now for seamless
        financial freedom.
      </AppText>
      <Spacing flex={1} />
      <AppButton title="Get Started" onPress={() => {}} />
    </Box>
  );
}

import { Image } from "react-native";
import { Box } from "@/src/shared_components/box/Box";
import AppSvg from "@/src/shared_components/svg_icon/AppSvg";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import {
  heightPixel,
  pixelSizeHorizontal,
} from "@/src/config/utils/Responsiveness";
import { AppText } from "@/src/shared_components/text/AppText";
import { AppButton } from "@/src/shared_components/button/AppButton";
import { router } from "expo-router";

export default function AuthenticationScreen() {
  return (
    <Box alignItems="center">
      <AppSvg name="logo" />
      <Spacing height={heightPixel(24)} />
      <AppSvg name="welcome" />
      <Spacing height={heightPixel(48)} />
      <AppText textAlign="center">Welcome to Jara Pay</AppText>
      <Spacing height={heightPixel(8)} />
      <AppText textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
        dictum turpis. Fusce hendrerit quam vel.
      </AppText>
      <Spacing height={heightPixel(48)} />
      <AppButton
        title="Create Account"
        onPress={() => {
          router.push("/create_account");
        }}
      />
      <Spacing height={heightPixel(16)} />
      <AppButton title="Log In" borderButton onPress={() => {}} />
    </Box>
  );
}

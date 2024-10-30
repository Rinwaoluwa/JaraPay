import { Box } from "@/src/shared_components/box/Box";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from "@/src/config/utils/Responsiveness";
import { AppText } from "@/src/shared_components/text/AppText";
import { AppButton } from "@/src/shared_components/button/AppButton";
import { router } from "expo-router";
import AppSvgIcon from "@/src/shared_components/svg_icon/AppSvg";

export default function AuthenticationScreen() {
  return (
    <Box paddingHorizontal={16}>
      <Box alignItems="center">
        <AppSvgIcon name="logo" />
        <Spacing height={heightPixel(24)} />
        <AppSvgIcon name="welcome" />
        <Spacing height={heightPixel(48)} />
        <AppText textAlign="center">Welcome to Jara Pay</AppText>
        <Spacing height={heightPixel(8)} />
        <AppText textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          dictum turpis. Fusce hendrerit quam vel.
        </AppText>
        <Spacing height={heightPixel(48)} />
      </Box>
      <AppButton
        title="Create Account"
        width={"100%" as any}
        onPress={() => {
          router.push("/create_account");
        }}
      />
      <Spacing height={heightPixel(16)} />
      <AppButton width={"100%" as any} title="Log In" borderButton onPress={() => router.push("/login")} />
      <Spacing height={heightPixel(91)} />
    </Box>
  );
}

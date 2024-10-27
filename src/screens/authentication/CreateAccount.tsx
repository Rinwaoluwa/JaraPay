import { AppColors } from "@/src/config/utils/Colors";
import { heightPixel } from "@/src/config/utils/Responsiveness";
import { AppTextInput } from "@/src/shared_components/app_text_field/AppTextField";
import { Box } from "@/src/shared_components/box/Box";
import { AppButton } from "@/src/shared_components/button/AppButton";
import AppCheckbox from "@/src/shared_components/checkbox/AppCheckbox";
import { Row } from "@/src/shared_components/row/Row";
import { AppScrollView } from "@/src/shared_components/scrollview/AppScrollView";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import { Stepper } from "@/src/shared_components/stepper/AppStepper";
import { AppText } from "@/src/shared_components/text/AppText";
import { useForm } from "react-hook-form";

export function CreateAccount() {
  const { control } = useForm();
  return (
    // [applySafeArea] is set to false because header already handles it
    <Box applySafeArea={false}>
      <AppScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Spacing height={heightPixel(8)} />
        <Stepper
          steps={[
            { title: "ONE" },
            { title: "TWO" },
            { title: "THREE" },
            { title: "FOUR" },
            // { title: "FIVE" },
          ]}
          currentStep={2}
        />
        <Spacing height={heightPixel(24)} />
        <AppTextInput
          label="First name"
          control={control}
          prefix="airplane"
          suffix="bluetooth"
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
          <AppText textAlign="center" fontSize={14} fontWeight={"400"}>
            I agree to the {"  "}
            <AppText color={AppColors.primary} fontWeight={"500"}>
              Terms and Conditions
            </AppText>{"  "}
            and{"  "}
            <AppText color={AppColors.primary} fontWeight={"400"}>
              Privacy Policy
            </AppText>
          </AppText>
        </Row>
        <Spacing height={heightPixel(16)} />
        <AppButton title="Continue" onPress={() => {}} />
        <Spacing height={heightPixel(20)} />
      </AppScrollView>
    </Box>
  );
}

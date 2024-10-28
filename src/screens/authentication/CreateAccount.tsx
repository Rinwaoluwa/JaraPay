import { heightPixel } from "@/src/config/utils/Responsiveness";
import { Box } from "@/src/shared_components/box/Box";
import { AppButton } from "@/src/shared_components/button/AppButton";
import { AppScrollView } from "@/src/shared_components/scrollview/AppScrollView";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import { Stepper } from "@/src/shared_components/stepper/AppStepper";
import MyInformationForm from "./components/MyInformationForm";
import { useState } from "react";
import OtpVerificationForm from "./components/OtpVerificationForm";
import CreatePasswordForm from "./components/CreatePasswordForm";
import { router } from "expo-router";
import SetupPinForm from "./components/SetupPinForm";

export function CreateAccount() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const createAccountSteps = [
    { title: "My Information" },
    { title: "OTP Verification" },
    { title: "Password" },
    { title: "PIN" },
  ];
  const isLastIndex = currentStepIndex === createAccountSteps.length - 1;

  function showCurrentStepScreen(index: number) {
    switch (index) {
      case 0:
        return <MyInformationForm />;
      case 1:
        return <OtpVerificationForm />;
      case 2:
        return <CreatePasswordForm />;
      case 3:
        return <SetupPinForm />;
      default:
        return <MyInformationForm />;
    }
  }

  return (
    // [applySafeArea] is set to false because header already handles it
    <Box applySafeArea={false}>
      <Spacing height={heightPixel(8)} />
      <Stepper
        steps={createAccountSteps}
        currentStep={currentStepIndex}
        onPressStep={(index) => {
          setCurrentStepIndex(index);
        }}
      />
      <Spacing height={heightPixel(8)} />
      <AppScrollView contentContainerStyle={{}}>
        <Spacing height={heightPixel(24)} />
        {showCurrentStepScreen(currentStepIndex)}
        <Spacing height={heightPixel(16)} />
      </AppScrollView>
      <AppButton
        title="Continue"
        onPress={() => {
          console.log("WHAT IS THE INDEX BUTTON", currentStepIndex);
          if (isLastIndex) router.push("/welcome");
          else setCurrentStepIndex(currentStepIndex + 1);
        }}
      />
      <Spacing height={heightPixel(30)} />
    </Box>
  );
}

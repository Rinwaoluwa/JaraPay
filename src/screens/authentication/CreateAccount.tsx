import { Box } from "@/src/shared_components/box/Box";
import { Stepper } from "@/src/shared_components/stepper/AppStepper";

export function CreateAccount() {
  return (
    <Box>
      <Stepper steps={4} currentStep={2} />
    </Box>
  );
}

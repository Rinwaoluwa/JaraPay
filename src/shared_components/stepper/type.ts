import { AppColorPallete } from "@/src/config/utils/Colors";

export interface StepperProps {
  steps: Array<{
    title: string;
  }>;
  currentStep: number;
  activeColor?: AppColorPallete;
  inactiveColor?: AppColorPallete;
  stepSize?: number;
  lineHeight?: number;
  labelStyle?: Object;
  activeLabelStyle?: Object;
  onPressStep?: (stepIndexx: number) => void;
}

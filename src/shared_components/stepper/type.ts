export interface StepperProps {
    steps: number;
    currentStep: number;
    activeColor?: string;
    inactiveColor?: string;
    stepSize?: number;
    lineHeight?: number;
  }
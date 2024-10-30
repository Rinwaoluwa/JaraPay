export interface StepperProps {
    steps: number;
    stepsTitles?: Array<string>;
    currentStep: number;
    activeColor?: string;
    inactiveColor?: string;
    stepSize?: number;
    lineHeight?: number;
  }
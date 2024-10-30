import { AppColorPallete } from "@/src/config/utils/Colors";
import { ReactNode } from "react";

export interface AppButtonProps {
  title: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onPress: () => void;
  color?: string;
  textColor?: AppColorPallete;
  textSize?: number;
  width?: number;
  height?: number;
  loading?: boolean;
  loadingIcon?: ReactNode;
  isEnabled?: boolean;
  borderButton?: boolean;
  borderRadius?: number;
  loadingIconPosition?: "left" | "right";
}

import { ReactNode } from "react";
import { FlexStyle } from "react-native";

export interface AppButtonProps {
  title: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onPress: () => void;
  color?: string;
  textColor?: string;
  width?: number;
  height?: number;
  isLoading?: boolean;
  loadingIcon?: ReactNode;
  isEnabled?: boolean;
  borderButton?: boolean;
  borderRadius?: number;
  loadingIconPosition?: "left" | "right";
  // padding?: ;
  // this.padding,
  // this.margin,
  // this.hasError = false,
  // this.noRadius = false,
  // this.paddingSelf,
  // this.constraints,
}

import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface BoxProps extends ViewStyle {
  applySafeArea?: boolean;
  children: ReactNode;
}

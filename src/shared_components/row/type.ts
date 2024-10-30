import { ReactNode } from "react";
import { FlexStyle } from "react-native";

export interface RowProps {
  children: ReactNode;
  spacing?: number;
  axisAlignment?: FlexStyle["justifyContent"];
  alignItems?:  FlexStyle['alignItems'],
  wrap?: FlexStyle['flexWrap'];
}

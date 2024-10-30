import { ReactNode } from "react";

export interface PaddingProps {
  padding?: number;
  paddingBottom?: number;
  paddingEnd?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingStart?: number;
  paddingTop?: number;
  paddingVertical?: number;
  children: ReactNode;
}

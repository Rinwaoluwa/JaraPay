import { ReactNode } from "react";
import { TextProps, TextStyle } from "react-native";

export interface AppTextStyle {
  color?: string;
  fontFamily?: FontFamily;
  fontSize?: number;
  fontStyle?: TextStyle["fontStyle"];
  fontWeight?: TextStyle["fontWeight"];
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: TextStyle["textAlign"];
  textAlignVertical?: TextStyle["textAlignVertical"];
  textDecorationColor?: TextStyle["textDecorationColor"];
  textDecorationLine?: TextStyle["textDecorationLine"];
  textDecorationStyle?: TextStyle["textDecorationStyle"];
  textShadowColor?: TextStyle["textShadowColor"];
  writingDirection?: TextStyle["writingDirection"];
  textShadowOffset?: TextStyle["textShadowOffset"];
  textShadowRadius?: number;
  textTransform?: TextStyle["textTransform"];
  children: ReactNode;
  width?: number;
  padding?: number;
  paddingBottom?: number;
  paddingEnd?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingStart?: number;
  paddingTop?: number;
  paddingVertical?: number;
}

type FontFamily = "Satoshi" | "Inter";

import { AppColorPallete } from "@/src/config/utils/Colors";
import { ReactNode } from "react";
import {  TextProps, TextStyle, ViewStyle } from "react-native";

export interface AppTextStyle extends TextStyle, TextProps{
  color?: string;
  fontFamily?: FontFamily;
  children: ReactNode;
}

type FontFamily = "Satoshi" | "Inter";

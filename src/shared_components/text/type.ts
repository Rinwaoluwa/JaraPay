import { AppColorPallete } from "@/src/config/utils/Colors";
import { ReactNode } from "react";
import {  TextStyle } from "react-native";

export interface AppTextStyle extends TextStyle{
  color?: string;
  fontFamily?: FontFamily;
  children: ReactNode;
}

type FontFamily = "Satoshi" | "Inter";

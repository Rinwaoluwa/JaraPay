import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { PaddingProps } from "./type";

export default function Padding({
  padding,
  paddingBottom,
  paddingEnd,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingStart,
  paddingTop,
  paddingVertical,
  children,
}: PaddingProps) {
  return (
    <View
      style={{
        padding: padding,
        paddingBottom: paddingBottom,
        paddingEnd: paddingEnd,
        paddingHorizontal: paddingHorizontal,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingStart: paddingStart,
        paddingTop: paddingTop,
        paddingVertical: paddingVertical,
      }}
    >
      {children}
    </View>
  );
}

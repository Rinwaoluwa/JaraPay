import { View, Text } from "react-native";
import React from "react";
import { RowProps } from "./type";

export function Row({ children, alignItems, spacing, axisAlignment }: RowProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: spacing,
        justifyContent: axisAlignment,
        alignItems: alignItems,
      }}
    >
      {children}
    </View>
  );
}
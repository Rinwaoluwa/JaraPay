import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BoxProps } from "./type";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";

export const Box = ({
  children,
  applySafeArea = true,
  paddingRight,
  paddingLeft,
  ...style
}: BoxProps) => {
  console.log("box style: ", style)
  const { bottom, left, right, top } = useSafeAreaInsets();
  const color = style.backgroundColor ?? useThemeColor("background");
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      {/* THIS VIEW REPRESENTS THE SAFE AREA */}
      <View
        style={[
          {
            paddingTop: applySafeArea ? top : 0,
            paddingBottom: applySafeArea ? bottom : 0,
            paddingLeft: paddingLeft ?? 8,
            paddingRight: paddingRight ?? 8,
            ...styles.container,
          },
          { ...style }
        ]}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

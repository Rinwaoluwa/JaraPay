import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

const AppIcon = ({
  size,
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) => {
  return <Ionicons size={size ?? 28} style={style} {...rest} />;
};

export default AppIcon;

const styles = StyleSheet.create({});

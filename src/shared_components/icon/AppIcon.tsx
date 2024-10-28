import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppIconProps } from "./type";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { AppColors } from "@/src/config/utils/Colors";

export const AppIcon = ({
  name,
  size,
  color,
  onPress,
  onLongPress,
}: AppIconProps) => {
  const iconColor = useThemeColor("tint");
  return (
    <Ionicons
      name={name}
      size={size ?? 28}
      color={color ?? iconColor}
      onPress={onPress}
      onLongPress={onLongPress}
    />
  );
};

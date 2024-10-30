import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import React from "react";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");

export function OnboardItemView({ image }: { image: ImageSourcePropType }) {
  const color = useThemeColor("primary");
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: color,
        width: width,
        borderBottomLeftRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.55,
      }}
    >
      <Image style={{ paddingTop: top }} source={image} />
    </View>
  );
}

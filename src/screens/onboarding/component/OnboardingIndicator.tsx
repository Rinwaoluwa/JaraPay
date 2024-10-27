import React from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { AppColors } from "@/src/config/utils/Colors";

export function OnboardingIndicator({
  isActive = false,
}: {
  isActive: boolean;
}) {
  const activeColor = useThemeColor("primary");
  // console.log("IS ACTIVE", isActive);

  // Create an animated value for the active state
  // const progress = useDerivedValue(() => {
  //   return withTiming(isActive ? 1 : 0);
  // }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(isActive ? 32 : 10),
      backgroundColor: withTiming(
        isActive ? activeColor : AppColors.primary200,
      ),
      // backgroundColor: interpolateColor(
      //   progress.value,
      //   [0, 1],
      //   [AppColors.grey, activeColor],
      // ),
    };
  }, [isActive]);
  return (
    <Animated.View style={[{ height: 10, borderRadius: 80 }, animatedStyle]} />
  );
}

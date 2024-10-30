import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from 'react-native';
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { AppColors } from "@/src/config/utils/Colors";
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "@/src/config/utils/Responsiveness";

interface Props {
  activeTab: number;
  tabCount: number;
}

export function OnboardingIndicator({ activeTab, tabCount }: Props) {
  const indicators = Array.from({ length: tabCount });
  const activeColor = useThemeColor("primary")

  const animations = useRef(
    indicators.map(() => ({
      width: new Animated.Value(20),
      color: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    animations.forEach((animation, index) => {
      Animated.parallel([
        Animated.timing(animation.width, {
          toValue: index === activeTab ? 32 : 10,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(animation.color, {
          toValue: index === activeTab ? 1 : 0,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    });
  }, [activeTab]);

  return (
    <View style={styles.indicatorContainer}>
      {indicators.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.indicator,
            {
              width: index === activeTab ? animations[index].width : widthPixel(10),
              backgroundColor: animations[index].color.interpolate({
                inputRange: [0, 1],
                outputRange: [AppColors.primary200, activeColor],
              }),
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(15),
  },
  indicator: {
    height: heightPixel(10),
    borderRadius: normalise(20),
    marginHorizontal: pixelSizeHorizontal(5),
  },
});

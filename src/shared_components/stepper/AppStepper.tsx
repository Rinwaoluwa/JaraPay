import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AppText } from "../text/AppText";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { AppColorPallete } from "@/src/config/utils/Colors";

interface StepperProps {
  steps: Array<{
    title: string;
  }>;
  currentStep: number;
  activeColor?: AppColorPallete;
  inactiveColor?: AppColorPallete;
  stepSize?: number;
  lineHeight?: number;
  labelStyle?: Object;
  activeLabelStyle?: Object;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  activeColor,
  inactiveColor,
  stepSize = 24,
  lineHeight = 2,
  labelStyle = {},
  activeLabelStyle = {},
}) => {
  const renderStep = (index: number) => {
    const isActive = index <= currentStep - 1;

    const colorActive = activeColor ?? useThemeColor("primary");
    const colorInActive = inactiveColor ?? useThemeColor("tabIconDefault");
    const stepColor = isActive ? colorActive : colorInActive;
    const textColor = isActive ? colorActive : colorInActive;

    return (
      <View key={index} style={styles.stepContainer}>
        <View style={styles.stepAndLineContainer}>
          {/* Line before step (hide for first step) */}
          {index !== 0 && (
            <View
              style={[
                styles.line,
                {
                  backgroundColor: isActive ? activeColor : inactiveColor,
                  height: lineHeight,
                },
              ]}
            />
          )}

          {/* Step circle */}
          <View
            style={[
              styles.step,
              {
                width: stepSize,
                height: stepSize,
                borderRadius: stepSize / 2,
                borderColor: isActive ? activeColor : inactiveColor,
                backgroundColor: isActive ? activeColor : "white",
              },
            ]}
          />
          {/* Line after step (hide for last step) */}
          {index !== steps.length - 1 && (
            <View
              style={[
                styles.line,
                {
                  backgroundColor:
                    index < currentStep - 1 ? activeColor : inactiveColor,
                  height: lineHeight,
                },
              ]}
            />
          )}
        </View>

        {/* Label text */}
        <AppText
          // textAlign='center'
          color={textColor}
          fontSize={12}
          fontWeight={"400"}
          // style={[
          //   styles.label,
          //   labelStyle,
          //   isActive && styles.activeLabel,
          //   isActive && activeLabelStyle,
          // ]}
        >
          {steps[index].title}
        </AppText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: steps.length }, (_, index) => renderStep(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
  },
  stepContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  stepAndLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  step: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    flex: 1,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
  },
  activeLabel: {
    color: "#000000",
    fontWeight: "500",
  },
});

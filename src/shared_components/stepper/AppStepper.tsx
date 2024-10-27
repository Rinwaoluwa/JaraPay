
import React from "react";
import { View, StyleSheet, Animated, } from "react-native";
import { StepperProps } from "./type";



export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  activeColor = "#4CAF50",
  inactiveColor = "#E0E0E0",
  stepSize = 24,
  lineHeight = 2,
}) => {
  const renderStep = (index: number) => {
    const isActive = index <= currentStep - 1;
    
    return (
      <View key={index} style={styles.stepContainer}>
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
        {index !== steps - 1 && (
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
    );
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: steps }, (_, index) => renderStep(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  step: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    flex: 1,
  },
});

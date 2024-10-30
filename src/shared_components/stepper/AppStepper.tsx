import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { AppText } from "../text/AppText";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { AppColorPallete, AppColors } from "@/src/config/utils/Colors";
import { fontPixel } from "@/src/config/utils/Responsiveness";
import { AppIcon } from "../icon/AppIcon";

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
  onPressStep?: (stepIndexx: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  activeColor,
  inactiveColor,
  stepSize = 24,
  lineHeight = 2,
  labelStyle = {},
  onPressStep,
  activeLabelStyle = {},
}) => {
  const renderStep = (index: number) => {
    const renderStepIconIf = index % 2 == 0;
    //~~ ROUNDS THE NUMBER TO A WHOLE NUMBER
    const stepIndexNumber = ~~(index / 2);
    const activeStep = stepIndexNumber == currentStep;
    const completedSteps = stepIndexNumber < currentStep;

    const colorActive = activeColor ?? useThemeColor("primary");
    const colorInActive = inactiveColor ?? AppColors.grey10;
    const stepColor =
      activeStep || completedSteps ? colorActive : colorInActive;
    const stepLineColor = completedSteps ? colorActive : AppColors.grey10;
    const textColor =
      activeStep || completedSteps ? colorActive : AppColors.black;

    const size = stepSize;
    // const size = activeStep ? stepSize : 8;

    return (
      <View key={index} style={styles.stepContainer}>
        <View style={styles.stepAndLineContainer}>
          {/* {renderStepIconIf ? (
            <View
              style={[
                styles.step,
                {
                  width: stepSize,
                  height: stepSize,
                  borderRadius: stepSize / 2,
                  borderColor: stepColor,
                  backgroundColor: stepColor,
                },
              ]}
            />
          ) : (
            <View
              style={[
                styles.line,
                {
                  backgroundColor: stepLineColor,
                  height: lineHeight,
                },
              ]}
            />
          )} */}
          {renderStepIconIf && (
            <>
              {completedSteps ? (
                <AppIcon
                  name="checkmark-circle"
                  onPress={() => {
                    if (onPressStep) onPressStep(stepIndexNumber);
                  }}
                />
              ) : (
                <Pressable
                  onPress={() => {
                    if (onPressStep) onPressStep(stepIndexNumber);
                  }}
                >
                  <View
                    style={[
                      styles.step,
                      {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderColor: stepColor,
                        backgroundColor: stepColor,
                      },
                    ]}
                  />
                </Pressable>
              )}
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor: stepLineColor,
                    height: lineHeight,
                  },
                ]}
              />
            </>
          )}
        </View>
        {renderStepIconIf && (
          <AppText
            color={textColor}
            textAlign="center"
            fontSize={fontPixel(11)}
            fontWeight={"400"}
          >
            {steps[stepIndexNumber].title}
          </AppText>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: steps.length * 2 - 1 }, (_, index) =>
        renderStep(index),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "center",
  },
  stepContainer: {
    // flex: 1,
    alignItems: "center",
  },
  stepAndLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
  },
  step: {
    borderWidth: 2,
  },
  line: {
    flex: 1,
    width: "200%",
  },
});

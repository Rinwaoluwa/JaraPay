import React, { useRef, useState } from "react";
import { OnboardItemView } from "@/src/screens/onboarding/component/OnboardItemView";
import { OnboardingIndicator } from "./component/OnboardingIndicator";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";
import Padding from "@/src/shared_components/padding/Padding";

import { AppScrollView } from "@/src/shared_components/scrollview/AppScrollView";
import { Box } from "@/src/shared_components/box/Box";
import { Spacing } from "@/src/shared_components/spacing/Spacing";
import { AppConstants } from "@/src/config/constants/AppConstants";
import { AppText } from "@/src/shared_components/text/AppText";
import { Row } from "@/src/shared_components/row/Row";
import { AppButton } from "@/src/shared_components/button/AppButton";

const { width } = Dimensions.get("screen");

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollController = useRef<ScrollView>();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / Dimensions.get("screen").width);
    setCurrentIndex(index);
  };
  const isLast = currentIndex == AppConstants.onboardingImages.length - 1;
  console.log(`CURRENT INDEX IS ${currentIndex}  IS IT LLAST `, isLast);
  return (
    <Box applySafeArea={false} paddingRight={0} paddingLeft={0}>
      <AppScrollView
        ref={scrollController}
        pagingEnabled
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {AppConstants.onboardingImages.map((item, index) => (
          <OnboardItemView key={`${index + item}`} image={item} />
        ))}
      </AppScrollView>
      <Padding paddingHorizontal={8}>
        <Spacing height={32} />
        <AppText fontWeight={"700"} fontSize={32}>
          Easy Payments
        </AppText>
        <Spacing height={32} />
        <AppText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          dictum turpis. Fusce hendrerit quam vel.
        </AppText>
        <Spacing height={64} />
        <Row axisAlignment="space-between" alignItems="baseline">
          <Row spacing={8}>
            {AppConstants.onboardingImages.map((item, index) => (
              <OnboardingIndicator
                key={`${index + item}`}
                isActive={currentIndex === index}
              />
            ))}
          </Row>
          <AppButton
            width={86}
            // height={30}
            title="Next"
            onPress={() => {
              const offsetX = width * (currentIndex + 1);
              if (isLast) {
                console.log("first");
              } else {
                scrollController.current?.scrollTo({
                  animated: true,
                  x: offsetX,
                });
                setCurrentIndex(() => currentIndex + 1);
              }
            }}
          />
        </Row>
      </Padding>
    </Box>
  );
}
import { View, ScrollView } from "react-native";
import React, {
  ForwardedRef,
  LegacyRef,
  Ref,
  RefObject,
  forwardRef,
} from "react";
import { AppScrollViewProps } from "./type";

export const AppScrollView = forwardRef(
  ({ children, ...props }: AppScrollViewProps, ref: LegacyRef<ScrollView>) => {
    return (
      <ScrollView
        ref={ref}
        {...props}
        showsHorizontalScrollIndicator={
          props.showsHorizontalScrollIndicator ?? false
        }
        showsVerticalScrollIndicator={
          props.showsVerticalScrollIndicator ?? false
        }
        keyboardDismissMode="on-drag"
      >
        {children}
      </ScrollView>
    );
  },
);

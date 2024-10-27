import { Controller } from "react-hook-form";
import React from "react";
import {
  View,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextInput,
} from "react-native";

import { AppTextInputProps } from "./type";
import {
  fontPixel,
  heightPixel,
  normalise,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "@/src/config/utils/Responsiveness";
import { AppText } from "../text/AppText";
import { AppIcon } from "../icon/AppIcon";
import { Spacing } from "../spacing/Spacing";
import { HelperFunctions } from "@/src/config/helpers/HelperFunctions";

export const AppTextInput = ({
  error,
  onBlur: pureOnBlur,
  onFocus,
  prefix,
  onPressPrefixIcon,
  suffix,
  width,
  label,
  onPressSuffixIcon,
  ...props
}: AppTextInputProps) => {
  return (
    <View style={{ ...styles.textInputContainer, width: width }}>
      <AppText>
        {HelperFunctions.toCapitalized({ stringValue: label })}{" "}
      </AppText>
      <Spacing height={heightPixel(8)} />
      <Controller
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.3,
                borderRadius: normalise(5),
                paddingHorizontal: pixelSizeHorizontal(6),
              },
            ]}
          >
            {prefix && (
              <>
                <Spacing width={widthPixel(6)} />
                <AppIcon name={prefix} onPress={onPressPrefixIcon} />
                <Spacing width={widthPixel(6)} />
              </>
            )}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              autoCapitalize="none"
              editable={props?.editable}
              style={[
                props.containerStyle,
                {
                  width: "80%",
                  maxWidth: heightPixel(368),
                  paddingVertical: pixelSizeVertical(15),
                  fontFamily: "medium",
                  fontSize: fontPixel(14),
                },
              ]}
              {...props}
            />
            {suffix && (
              <>
                <AppIcon name={suffix} onPress={onPressSuffixIcon} />
                <Spacing width={widthPixel(6)} />
              </>
            )}
          </View>
        )}
        name={props.name}
      />
      {error ? <AppText fontSize={12}>{error}</AppText> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: pixelSizeVertical(8),
  },
});

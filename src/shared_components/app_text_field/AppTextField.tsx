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
import { AppColors } from "@/src/config/utils/Colors";

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
  keyboardType,
  ...props
}: AppTextInputProps) => {
  return (
    <View style={{ ...styles.container }}>
      <AppText>
        {HelperFunctions.toCapitalized({ stringValue: label ?? "" })}{" "}
      </AppText>
      <Spacing height={heightPixel(8)} />
      <Controller
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={{
              ...styles.textInputContainer,
              borderWidth: error ? 1 : 0.3,
              borderColor: error ? AppColors.red : undefined,
              width: width,
            }}
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
              keyboardType={keyboardType}
              style={styles.textinput}
              {...props}
            />
            {suffix && (
              <>
                <Spacing flex={1} />
                <AppIcon name={suffix} onPress={onPressSuffixIcon} />
                <Spacing width={widthPixel(6)} />
              </>
            )}
          </View>
        )}
        name={props.name}
      />
      {error ? (
        <AppText color={AppColors.red} fontSize={14}>
          {error}
        </AppText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: normalise(5),
    paddingHorizontal: pixelSizeHorizontal(6),
  },
  textinput: {
    width: "80%",
    alignSelf: "center",
    maxWidth: heightPixel(368),
    paddingVertical: pixelSizeVertical(15),
    fontFamily: "Satoshi",
    fontSize: fontPixel(14),
  },
});

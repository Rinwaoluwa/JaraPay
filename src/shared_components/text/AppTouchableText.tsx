import { TouchableOpacity } from "react-native";
import { AppTextStyle } from "./type";
import { AppText } from "./AppText";

export function AppTouchableText({ children, ...props }: AppTextStyle) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <AppText {...props} onPress={() => {}}>{children}</AppText>
    </TouchableOpacity>
  );
}

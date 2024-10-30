import { AppColors } from "@/src/config/utils/Colors";
import { AppText } from "@/src/shared_components/text/AppText";
import { View } from "react-native";

export default () => (
  <View style={{ padding: 20, flex: 1 }}>
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <AppText fontSize={15} color={AppColors.primary}>Explore</AppText>
    </View>
  </View>
)
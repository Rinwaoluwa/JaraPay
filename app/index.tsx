import AuthenticationScreen from "@/src/screens/authentication/AuthenticationScreen";
import { useNavigation } from "expo-router";

export default ({}) => {
  const navigation = useNavigation();
  navigation.setOptions({
    
  })
  
  return <AuthenticationScreen />;
};

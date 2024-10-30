import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/src/config/hooks/useColorScheme";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";
import { fontPixel } from "@/src/config/utils/Responsiveness";
import { AppIcon } from "@/src/shared_components/icon/AppIcon";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Satoshi: require("../assets/fonts/Satoshi-Regular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const tintColor = useThemeColor("text");
  const titleColor = useThemeColor("text");
  return (
    <Stack
      screenOptions={{
        headerTintColor: tintColor,
        headerTitleStyle: { color: titleColor },
        headerLeft: () => <AppIcon name="chevron-back" color="black" onPress={() => router.back()} />,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="authentication"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="create_account"
        options={{
          headerBackTitleVisible: false,
          title: "Create Account",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: fontPixel(20),
            color: "black",
          }
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerBackTitleVisible: false,
          title: "Login",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: fontPixel(20),
            color: "black",
          }
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          // headerShown: false,
          headerBackTitleVisible: false,
          title: "",
        }}
      />
    </Stack>
  );
}

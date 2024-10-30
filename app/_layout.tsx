import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/src/config/hooks/useColorScheme";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";

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
  const tintColor = useThemeColor("primary");
  const titleColor = useThemeColor("tint");
  return (
    <Stack
      screenOptions={{
        headerTintColor: 'black',
        // headerTitleStyle: { color: titleColor },
        
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
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerBackTitleVisible: false,
          title: "Login",
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          headerBackTitleVisible: false,
          title: "",
        }}
      />
    </Stack>
  );
}

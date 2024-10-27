import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/src/shared_components/navigation/TabBarIcon";
import { useColorScheme } from "@/src/config/hooks/useColorScheme";
import { useThemeColor } from "@/src/config/hooks/useThemeColor";

export default function TabLayout() {
  const selectedTab = useThemeColor("tabIconSelected");
  const unSelectedTab = useThemeColor("tabIconDefault");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: selectedTab,
        tabBarInactiveTintColor: unSelectedTab,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

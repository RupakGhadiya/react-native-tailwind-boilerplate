import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BlurView } from "expo-blur";
import { RiHome7Fill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: "rgba(150,150,150,0.8)",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 0,
          marginTop: 4,
        },
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            tint={colorScheme === "dark" ? "dark" : "light"}
            className="flex-1 rounded-3xl"
          />
        ),
        tabBarStyle: Platform.select({
          web: {
            position: "absolute",
            bottom: 15,
            left: 15,
            right: 15,
            height: 65,
            borderRadius: 24,
            overflow: "hidden",
            borderTopWidth: 10,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 10,
            border: "2px solid grey",
          },
          ios: {
            position: "absolute",
            bottom: 15,
            left: 15,
            right: 15,
            height: 65,
            borderRadius: 24,
            overflow: "hidden",
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 10,
          },
          android: {
            position: "absolute",
            bottom: 15,
            left: 15,
            right: 15,
            height: 65,
            borderRadius: 24,
            overflow: "hidden",
            elevation: 5,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <RiHome7Fill size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => <TiThMenu size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <IoPersonSharp size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => <IoMdSettings size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

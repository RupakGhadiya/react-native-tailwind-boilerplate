import React from "react";
import { Platform, Text, View } from "react-native";

const Menu = () => {
  return (
    <View className={`py-2 px-1 ${Platform.OS === "ios" ? "mt-[40px]" : ""}`}>
      <Text className="ml-2 mb-1 text-text1 text-[32px] font-extrabold">
        Menu
      </Text>
    </View>
  );
};

export default Menu;

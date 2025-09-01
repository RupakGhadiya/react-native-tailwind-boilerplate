import { Platform, Text, View } from "react-native";

export default function Profile() {
  return (
    <View className={`py-2 px-1 ${Platform.OS === "ios" ? "mt-[40px]" : ""}`}>
      <Text className="ml-2 mb-1 text-text1 text-[32px] font-extrabold">
        Profile
      </Text>
    </View>
  );
}

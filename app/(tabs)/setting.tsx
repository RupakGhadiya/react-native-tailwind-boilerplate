import NotificationsTab from "@/components/setting-component/NotificationsTab";
import SecurityTab from "@/components/setting-component/SecurityTab";
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { IoNotifications } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

import DataManagementTab from "@/components/setting-component/DataManagementTab";

const SettingsScreen = () => {
  const [activeTab, setActiveTab] = useState("notifications");

  const tabs = [
    {
      id: "notifications",
      label: "Notifications",
      icon: <IoNotifications size={22} />,
    },
    { id: "security", label: "Security", icon: <MdSecurity size={22} /> },
    {
      id: "datamanage",
      label: "Data Management",
      icon: <FaDatabase size={22} />,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "notifications":
        return <NotificationsTab />;
      case "security":
        return <SecurityTab />;
      case "datamanage":
        return <DataManagementTab />;
      default:
        return <NotificationsTab />;
    }
  };

  return (
    <View className="py-2 px-1">
      {/* Horizontal Tab Bar */}
      <Text className="ml-2 mb-1 text-text1 text-[32px] font-extrabold">Settings</Text>
      <Text className="ml-2 mb-5 text-text2 text-[14px] font-semibold">Manage your account preferences</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=""
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActiveTab(tab.id)}
            className={`h-fit flex-row items-center px-4 py-2 rounded-full mx-1  border-[2px] border-primary ${
              activeTab === tab.id ? "bg-primary" : "bg-surface"
            }`}
          >
            <Text
              className={`text-[14px] font-bold ${
                activeTab === tab.id ? "text-text1" : "text-text2"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Active Tab Content */}
      <ScrollView className="">{renderTabContent()}</ScrollView>
    </View>
  );
};

export default SettingsScreen;

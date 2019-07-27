import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView>
      <View>
        <Text>SettingsScreen</Text>
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: "Settings Screen"
};

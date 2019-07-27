import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ThirdScreen from "../screens/ThirdScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};
HomeStack.path = "";

const SecondStack = createStackNavigator(
  {
    Second: SecondScreen
  },
  config
);

SecondStack.navigationOptions = {
  tabBarLabel: "Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

SecondStack.path = "";

const ThirdStack = createStackNavigator(
  {
    Third: ThirdScreen,
    Settings: SettingsScreen
  },
  config
);

ThirdStack.navigationOptions = {
  tabBarLabel: "Third",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

ThirdStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SecondStack,
  ThirdStack
});

tabNavigator.path = "";

export default tabNavigator;

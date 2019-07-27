import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";

//import AuthScreen from '../screens/AuthScreen';
//import AuthLoadingScreen from '../screens/AuthLoadingScreen';
//import WelcomeScreen from '../screens/WelcomeScreen';

const switchNavigator = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Auth: AuthScreen,
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });

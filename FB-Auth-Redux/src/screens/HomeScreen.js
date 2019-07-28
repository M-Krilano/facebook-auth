import React from "react";
import { SecureStore, Button, Text, View } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home Screen"
  };

  deleteToken = () => {
    SecureStore.deleteItemAsync("fb_token");
  };
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Button title="delete token" onPress={this.deleteToken} />
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
export default HomeScreen;

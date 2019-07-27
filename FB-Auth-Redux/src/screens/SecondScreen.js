import React from "react";
import { ScrollView, Text, View } from "react-native";

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: "SecondScreen"
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Text>Second Screen</Text>
        </View>
      </ScrollView>
    );
  }
}

export default SecondScreen;

import React from "react";
import { ScrollView, Text, View } from "react-native";
//import { Button } from "react-native-elements";

class ThirdScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Third Screen"
      /*
      headerRight: (
        <Button
          raised
          backgroundColor="white"
          color="white"
          icon={{ name: "settings" }}
          style={{ marginRigth: 5 }}
          onPress={() => navigation.push("Settings")}
        />
      ),
      style: {
        marginTop: Platform.OS === "android" ? 24 : 0
      }
      */
    };
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text>ThirdScreen</Text>
          <Text>ThirdScreen</Text>
          <Text>ThirdScreen</Text>
          <Text>ThirdScreen</Text>
          <Text>ThirdScreen</Text>
          <Text>ThirdScreen</Text>
          <Text>ThirdScreen</Text>
        </View>
      </ScrollView>
    );
  }
}
export default ThirdScreen;

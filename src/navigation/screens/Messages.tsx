import { Text } from "@react-navigation/elements";
import { StaticScreenProps } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export function Messages() {
  return (
    <View style={styles.container}>
      <Text>Feature Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

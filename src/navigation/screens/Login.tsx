import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import TextInput from "../../components/TextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyles } from "@rneui/themed";

export function Login() {
  return (
    <SafeAreaView style={styles().container}>
      <Text>Get started by creating your account.</Text>
      <View style={styles().inputContainer}>
        <TextInput placeholderText="Email" />
        <TextInput placeholderText="Choose password" />
        <TextInput placeholderText="Confirm password" />
      </View>
    </SafeAreaView>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    gap: 10,
  },
}));

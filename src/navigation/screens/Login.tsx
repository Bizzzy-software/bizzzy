import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import TextInput from "../../components/TextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyles } from "@rneui/themed";
import Seperator from "../../components/Seperator";
import PrimaryButton from "../../components/PrimaryButton";
import SocialButtons from "../../components/Login/SocialButtons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sharedTextStyles } from "../../utils/textStyles";
import Footer from "../../components/Login/Footer";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const textStyle = sharedTextStyles();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles().container}>
      <Text>Get started by creating your account.</Text>
      <View style={styles().inputContainer}>
        <TextInput placeholderText="Email" />
        <TextInput placeholderText="Choose password" />
        <TextInput placeholderText="Confirm password" />
        <View style={styles().primaryButtonContainer}>
          <PrimaryButton
            buttonTitle={"Sign up"}
            onPress={() => {
              navigation.navigate("HomeTabs");
            }}
          />
        </View>
      </View>
      <Seperator />
      <SocialButtons />
      <Footer />
    </SafeAreaView>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: wp(15),
  },
  inputContainer: {
    width: "100%",
    gap: 10,
  },
  primaryButtonContainer: {
    width: "100%",
    height: 45,
  },
}));

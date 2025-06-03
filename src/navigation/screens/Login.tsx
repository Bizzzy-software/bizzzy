import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import TextInput from "../../components/TextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyles, Image } from "@rneui/themed";
import Seperator from "../../components/Seperator";
import PrimaryButton from "../../components/PrimaryButton";
import SocialButtons from "../../components/Login/SocialButtons";
import { sharedTextStyles } from "../../utils/textStyles";
import Footer from "../../components/Login/Footer";
import { useNavigation } from "@react-navigation/native";
import bizzyLogo from "../../assets/Bizzzy-logo.png";

export function Login() {
  const textStyle = sharedTextStyles();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles().container}>
      <Image source={bizzyLogo} style={styles().cardImage} />
      <Text style={[textStyle.blackBigLight, { marginVertical: 20 }]}>
        Get started by creating your account.
      </Text>
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
  },
  inputContainer: {
    width: "100%",
    gap: 10,
    paddingHorizontal: wp(15),
  },
  primaryButtonContainer: {
    width: "100%",
    height: 45,
  },
  cardImage: {
    width: wp(35),
    height: wp(35),
    borderRadius: 200,
    marginTop: 10,
  },
}));

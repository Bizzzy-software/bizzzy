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
import { sharedTextStyles } from "../../utils/textStyles";
import { useNavigation } from "@react-navigation/native";
import bizzyLogo from "../../assets/Bizzzy-logo.png";
import SocialButtons from "../../components/Auth/SocialButtons";
import Footer from "../../components/Auth/Footer";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Login() {
  const textStyle = sharedTextStyles();
  const navigation = useNavigation();

  const TextButton = () => (
    <TouchableOpacity onPress={() => {}}>
      <Text
        style={[textStyle.primaryBigLight, { marginTop: 10, fontSize: 16 }]}
      >
        Forgot Password
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles().container}>
      <Image source={bizzyLogo} style={styles().cardImage} />
      <View style={styles().inputContainer}>
        <TextInput placeholderText="Email" />
        <TextInput placeholderText="Password" />
        <View style={styles().primaryButtonContainer}>
          <PrimaryButton
            buttonTitle={"Login"}
            onPress={() => {
              navigation.navigate("HomeTabs");
            }}
          />
        </View>
      </View>
      <TextButton />
      <Seperator />
      <SocialButtons
        googleTitle="Continue with Google"
        facebookTitle="Continue with Facebook"
        appleTitle="Continue with Apple"
      />
      <Footer
        text="Don't have an account?"
        textButtonTitle="Create One"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
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
    marginBottom: hp(3),
  },
}));

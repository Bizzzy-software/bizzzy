import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "@react-navigation/elements";
import { StaticScreenProps } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { makeStyles } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../../components/PrimaryButton";
import { ChipButtons } from "../../components/Activities/ChipButtons";

export function Activities() {
  const style = styles();

  return (
    <ScrollView style={style.container}>
      <ChipButtons />
    </ScrollView>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: theme.colors.background,
    padding: wp(5),
  },
}));

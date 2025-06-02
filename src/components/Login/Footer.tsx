import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sharedTextStyles } from "../../utils/textStyles";

export default function Footer() {
  const textStyle = sharedTextStyles();
  return (
    <View style={styles().footerContainer}>
      <Text style={textStyle.blackMediumLight}>Don’t have an account?</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={[textStyle.primaryMediumLight, { marginTop: 3 }]}>
          Create One
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: 15,
    alignItems: "center",
  },
}));

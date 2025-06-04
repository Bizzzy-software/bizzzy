import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sharedTextStyles } from "../../utils/textStyles";

export default function Footer({
  textButtonTitle,
  text,
  onPress,
}: {
  textButtonTitle: string;
  text: string;
  onPress?: () => void;
}) {
  const textStyle = sharedTextStyles();
  return (
    <View style={styles().footerContainer}>
      <Text style={textStyle.blackMediumLight}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[textStyle.primaryMediumLight, { marginTop: 3 }]}>
          {textButtonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: 25,
    alignItems: "center",
  },
}));

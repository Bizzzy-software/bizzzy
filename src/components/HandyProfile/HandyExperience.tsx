import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";

export function HandyExperience() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  return (
    <View style={style.container}>
      <Text style={textStyles.blackMediumBold}>Skills & Experience</Text>
      <Text style={textStyles.blackMediumLight}>
        Licensed & Insured. Trustworthy, reliable & detail oriented professional
        cleaner with 5+ years of extensive experience in cleaning large and
        small houses. I bring my own supplies and only use environmental
        friendly products! Standard cleaning only!
      </Text>
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    margin: wp(2),
    backgroundColor: theme.colors.white,
    padding: wp(4),
    borderRadius: 15,
    gap: 10,
  },
}));

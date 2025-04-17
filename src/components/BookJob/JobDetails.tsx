import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";
import { MainInput } from "../MainInput";

export function JobDetails() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  return (
    <View style={style.jobFormContainer}>
      <Text style={textStyles.blackMediumSemiBold}>Job Title</Text>
      <MainInput title="Title of the job" />
      <Text style={textStyles.blackMediumSemiBold}>Address</Text>
      <MainInput title="Destination" />
      <Text style={textStyles.blackMediumSemiBold}>Postal zip</Text>
      <MainInput title="Postal zip" />
      <Text style={textStyles.blackMediumSemiBold}>Notes</Text>
      <MainInput title="You have note for shipper?" />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  jobFormContainer: {
    padding: wp(5),
    gap: hp(1),
  },
}));

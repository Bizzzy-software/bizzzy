import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedTextStyles } from "../../utils/textStyles";

const ViewAll = () => {
  var textStyles: any = sharedTextStyles();

  return (
    <View style={styles().container}>
      <Text style={textStyles.blackBigBold}>What needs to be done?</Text>
      <Text style={textStyles.secondaryMediumRegular}>View All +</Text>
    </View>
  );
};

const styles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginRight: wp(2),
    alignItems: "center",
  },
}));

export default ViewAll;

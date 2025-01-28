import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { sharedTextStyles } from "../../utils/textStyles";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { HandyBulletin } from "../../components/HandyProfile/HandyBulletin";
import { HandyHighlight } from "../../components/HandyProfile/HandyHighlight";
import PrimaryButton from "../../components/PrimaryButton";

export function HandyUserProfile() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  return (
    <View style={style.container}>
      <HandyBulletin />
      <HandyHighlight />
      <View style={style.buttonContainer}>
        <PrimaryButton buttonTitle="Request" />
        <PrimaryButton buttonTitle="Message" />
      </View>
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: theme.colors.white,
    paddingHorizontal: wp(3),
  },
  cardImage: {
    width: wp(25),
    height: wp(25),
    borderRadius: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
    paddingHorizontal: wp(2),
    marginVertical: hp(1),
  },
}));

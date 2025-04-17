import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";

export function FinalizeBooking() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  const DateAndTime = () => {
    return (
      <View style={style.container}>
        <Text style={[textStyles.blackMediumSemiBold, { fontSize: 16 }]}>
          Monday, 07 May, 2020
        </Text>
        <Text style={[textStyles.blackSmallRegular, { color: "#B4C2CD" }]}>
          12:30 AM
        </Text>
      </View>
    );
  };

  const CostInfoText = ({
    leftText,
    rightText,
    isActiveText = false,
  }: {
    leftText: string;
    rightText: string;
    isActiveText?: any;
  }) => {
    return (
      <View style={style.costInfo}>
        <Text style={[textStyles.blackMediumSemiBold, { fontSize: 16 }]}>
          {leftText}
        </Text>
        <Text
          style={[
            textStyles.blackMediumSemiBold,
            {
              color: isActiveText ? shared.primary.color : shared.black.colr,
              fontSize: 16,
            },
          ]}
        >
          {rightText}
        </Text>
      </View>
    );
  };

  const TotalCostInfo = () => {
    return (
      <View style={style.container}>
        <CostInfoText leftText="Hourly" rightText="$50.23" />
        <CostInfoText leftText="Assurance Tax" rightText="$2" />
        <CostInfoText leftText="Subtotal" rightText="$52" isActiveText={true} />
      </View>
    );
  };

  return (
    <View style={style.jobFormContainer}>
      <Text style={[textStyles.blackMediumSemiBold, { fontSize: 16 }]}>
        Time information
      </Text>
      <DateAndTime />
      <TotalCostInfo />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  jobFormContainer: {
    padding: wp(5),
    gap: hp(2),
  },
  container: {
    borderColor: "#F4F5F7",
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    gap: 5,
  },
  costInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

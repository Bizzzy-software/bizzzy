import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { Icon, makeStyles, Text } from "@rneui/themed";
import { TextStyle, View, ViewStyle } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";

export function PageMark(index: { index: number }) {
  console.log(index);
  const style = styles();
  const shared: any = sharedStyles();
  const textStyles = sharedTextStyles();

  const outerCircle = (isTrue: boolean): ViewStyle => ({
    height: wp(8),
    width: wp(8),
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isTrue ? "#f7c9aa" : shared.grey5.color,
  });

  const innerCircle = (isTrue: boolean): ViewStyle => ({
    height: wp(5.5),
    width: wp(5.5),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isTrue ? shared.primary.color : shared.white.color,
  });

  const leftLine = (isActiveMark: boolean): ViewStyle => ({
    position: "absolute",
    top: hp(2),
    right: wp(18),
    width: wp(23),
    height: 2,
    backgroundColor: isActiveMark ? shared.primary.color : shared.grey5.color,
  });

  const textStyle = (isActiveMark: boolean): TextStyle => ({
    color: isActiveMark ? shared.primary.color : shared.black.color,
    marginTop: 5,
  });

  const pageStep = (
    hasLeftLine: boolean,
    isActiveMark: boolean,
    text: string
  ) => {
    return (
      <View
        style={{
          alignItems: "center",
          width: wp(30),
        }}
      >
        {hasLeftLine ? <View style={leftLine(isActiveMark)} /> : null}
        <View style={outerCircle(isActiveMark)}>
          <View style={innerCircle(isActiveMark)}>
            <Icon
              name="check"
              type="font-awesome-5"
              color={shared.white.color}
              size={13}
              solid
            />
          </View>
        </View>
        <Text style={[textStyles.blackMediumRegular, textStyle(isActiveMark)]}>
          {text}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {pageStep(false, true, "Date & Time")}
      {pageStep(true, index.index >= 1 ? true : false, "Job Detail")}
      {pageStep(true, index.index >= 2 ? true : false, "Finalize")}
    </View>
  );
}

const styles = makeStyles((theme) => ({}));

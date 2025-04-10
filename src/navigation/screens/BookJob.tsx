import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text, Icon } from "@rneui/themed";
import { View, ViewStyle } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { useState } from "react";

export function BookJob() {
  const style = styles();
  const shared = sharedStyles();
  const [index, setIndex] = useState(0);

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

  const leftLine = (isActiveColor: boolean): ViewStyle => ({
    position: "absolute",
    top: hp(2),
    right: wp(18),
    width: wp(23),
    height: 2,
    backgroundColor: isActiveColor ? shared.primary.color : shared.grey5.color,
  });

  const checkMark = (
    hasLeftLine: boolean,
    isActiveColor: boolean,
    text: string
  ) => {
    return (
      <View
        style={{
          alignItems: "center",
          width: wp(30),
        }}
      >
        {hasLeftLine ? <View style={leftLine(isActiveColor)} /> : null}
        <View style={outerCircle(isActiveColor)}>
          <View style={innerCircle(isActiveColor)}>
            <Icon
              name="check"
              type="font-awesome-5"
              color={shared.white.color}
              size={13}
              solid
            />
          </View>
        </View>
        <Text>{text}</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View>
        <View style={{ flexDirection: "row" }}>
          {checkMark(false, true, "Date & Time")}
          {checkMark(true, false, "Job Detail")}
          {checkMark(true, false, "Finalize")}
        </View>
      </View>
    </View>
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
